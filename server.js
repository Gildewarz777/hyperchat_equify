import express from 'express';
import bodyParser from 'body-parser';
import { ApolloEngine } from 'apollo-engine';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { schema } from './graphql/schema';

const app = express();

// Enable tracing and cacheControl in Apollo Server
app.use('/graphql', bodyParser.json(), graphqlExpress({
  tracing: true,
  cacheControl: true,
  schema: schema,
}));

// Enable GraphiQL UI to test possible queries and mutations
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

// Initialize Engine with an API key
const engine = new ApolloEngine({ apiKey: 'service:GildeWarz777:3rHComGM3FFGMXMFGfhPmA' });

// Replace app.listen() with engine.listen()
engine.listen({
  port: 4000,
  expressApp: app,
});

