# VoltAgent Custom Endpoints Example

This example demonstrates how to use custom endpoints with VoltAgent. It includes three different approaches:

1. **Basic Custom Endpoints**: A simple example of adding custom endpoints to VoltAgent.
2. **Standalone Application**: A complete standalone application with custom endpoints.
3. **Express Integration**: An example of integrating VoltAgent with an Express application.

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Examples

#### Basic Custom Endpoints

```bash
npm run start:basic
# or
yarn start:basic
# or
pnpm start:basic
```

This will start a VoltAgent server with custom endpoints. Once the server is running, you can test the endpoints with the following curl commands:

```bash
# Test the hello endpoint
curl http://localhost:3141/custom/hello

# Test the echo endpoint
curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello World"}' http://localhost:3141/custom/echo

# Test the agent proxy endpoint
curl -X POST -H "Content-Type: application/json" -d '{"input":"What is the weather?"}' http://localhost:3141/custom/agent-proxy

# Test the late-addition endpoint (after 3 seconds)
curl http://localhost:3141/custom/late-addition
```

#### Standalone Application

```bash
npm run start:standalone
# or
yarn start:standalone
# or
pnpm start:standalone
```

This will start a standalone application with custom endpoints. Once the server is running, you can test the endpoints with the same curl commands as above.

#### Express Integration

```bash
npm run start:express
# or
yarn start:express
# or
pnpm start:express
```

This will start an Express application on port 3000 and a VoltAgent server on port 3141. Once the servers are running, you can:

1. Open http://localhost:3000 in your browser to see the Express application.
2. Test the Express routes:
   - http://localhost:3000/api/info
   - http://localhost:3000/api/time
3. Test the VoltAgent custom endpoints:
   - http://localhost:3141/custom/hello
   - http://localhost:3141/custom/debug
   - http://localhost:3141/custom/express-proxy

## Learn More

To learn more about VoltAgent and custom endpoints, check out the following resources:

- [VoltAgent Documentation](https://voltagent.dev/docs)
- [Custom Endpoints Documentation](https://voltagent.dev/docs/api/custom-endpoints)
- [VoltAgent GitHub Repository](https://github.com/VoltAgent/voltagent)
