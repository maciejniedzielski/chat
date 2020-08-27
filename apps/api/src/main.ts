import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { prisma } from './generated/prisma-client';

const typeDefs = gql`
  ${readFileSync(__dirname.concat('/src/schema.gql'), 'utf8')}
`;

const resolvers = {
  Query: {
    users: async () => await prisma.users(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`[🚀]  Server ready at ${url}`);
});
