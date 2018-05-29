// Define the schema of the objects that can be queried, along with 
// corresponding data types. Are also defined the queries and the 
// mutations availables.

import {  makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Message {
        id: Int!
        message: String!
        createdAt: String!
        room: String!
        userHash: String
    }

    # This type specifies the entry points into our API. 
    type Query {
        getMessages(room: String!, since: Int): [Message!]
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
        postMessage(message: String!, room: String!, userHash: String): Message!
    }
    `;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };