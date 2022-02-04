# micro-fes


## Topic 1:
### What is micro frontend?

- Micro-frontend architecture is a design approach in which a front-end app is decomposed into individual, semi-independent “microapps” working loosely together

### How is micro frontend build in this project?

- Over here in this example, we will be using Module Federation

### Module Federation
- This architecture allows the sharing of code and dependencies between two different application codebases.
  The code is loaded dynamically, and if a dependency is missing, the dependency will be downloaded by the host application, which allows for less code duplication in the application
- Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually.

For more information:
- https://blog.logrocket.com/building-micro-frontends-webpacks-module-federation/
- https://webpack.js.org/concepts/module-federation/#motivation
- https://bit.dev/ -> example


## Topic 2:
### Server Sent Events

- You'll need a bit of code on the server to stream events to the front-end, but the client side code works almost identically to websockets in part of handling incoming events.

**How are they unlike Websockets?**
- This is a one-way connection, so you can't send events from a client to a server.


Limitation:
https://caniuse.com/?search=Event%20source
