import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';

const typeDefs = gql`
  ${readFileSync(__dirname.concat('/src/schema.gql'), 'utf8')}
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`[🚀] Server started on port ${url}`);
});
