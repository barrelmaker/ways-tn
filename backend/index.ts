import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import { AppDataSource } from "./data-source";
import Resolvers from "./Resolvers";
import Schema from "./Schema";

dotenv.config();

async function startApolloServer(schema: any, resolvers: any) {
  // Initializes the Datasource for TypeORM
  AppDataSource.initialize()
    .then(async () => {
      // Express setup
      const app = express();
      app.use(express.json());

      const httpServer = http.createServer(app);
      const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        //tell Express to attach GraphQL functionality to the server
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      }) as any;
      await server.start(); //start the GraphQL server.
      server.applyMiddleware({ app });
      await new Promise<void>(
        (resolve) => httpServer.listen({ port: process.env.GQL_PORT }, resolve) //run the server on port 4000
      );
      console.log(
        `Server ready at http://localhost:${process.env.GQL_PORT}${server.graphqlPath}`
      );
    })
    .catch((err) => {
      console.error(err.stack);
    });
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);
