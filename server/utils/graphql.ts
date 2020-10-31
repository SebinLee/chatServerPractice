import "reflect-metadata";
import { GraphQLSchema } from "graphql";
import { buildSchemaSync } from "type-graphql";
import { ApolloServer } from "apollo-server";
import resolvers from "../resolver";
require("dotenv").config("../env");

// Variable that store created GraphQLSchema
let schema: GraphQLSchema;

/**
 * @description Makes GraphQLSchema using resolvers
 * @returns {Promise<GraphQLSchema>}
 */
export const createSchema = () => {
    (global as any).schema =
        (global as any).schema ||
        buildSchemaSync({
            resolvers,
            validate: false,
        });

    const schema = (global as any).schema;
    return schema;
};

/**
 * @description Make GraphQL Server using schema and return it
 */
export function createHandler() {
    // If schema is not exist, then createSchema and assign it
    if (!schema) {
        schema = createSchema();
    }

    // To See more about ApolloServer's Constructor Parameter
    // See the Documentation below
    // https://www.apollographql.com/docs/apollo-server/api/apollo-server/
    const server = new ApolloServer({
        cors: {
            origin: "*",
        },

        schema: schema,

        // To work playground properly, we muse define endpoint here
        // Environment Variable "PLAYGROUND_ENDPOINT" is defined under environment in serverless.yml
        playground: {
            endpoint: `${process.env.PLAYGROUND_ENDPOINT}`,
        },
    });

    return server;
}
