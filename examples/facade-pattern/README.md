# Facade Pattern

Facade pattern hides the complexities of the system and provides an interface to the client using which the client can access the system. This type of design pattern comes under structural pattern as this pattern adds an interface to existing system to hide its complexities.

Facade discusses encapsulating a complex subsystem within a single interface object. This reduces the learning curve necessary to successfully leverage the subsystem. It also promotes decoupling the subsystem from its potentially many clients. On the other hand, if the Facade is the only access point for the subsystem, it will limit the features and flexibility that "power users" may need.

<p align="center">
  <img src="./schema.drawio.png" />
</p>

NestJS modules can also have interface that other modules can use. Via `exports` you can manipulate which functions your modules offer to use

1. Create your logic in services. Example in [AuthTokensService](./src/modules/auth/services/auth-tokens.service.ts)
2. Create Facade service (or API Service) that will be exported from your module. Example in [AuthFacadeService](./src/modules/auth/services/auth-facade.service.ts)
3. Export your facade (api) service from your module. Example in [AuthModule](./src/modules/auth/auth.module.ts)

That's very helpful to understand what API your module has, especially when you work in a big team.
