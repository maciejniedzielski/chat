import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';
import { prisma } from './generated/prisma-client';

require('dotenv').config();

const typeDefs = gql`
  ${readFileSync(__dirname.concat('/src/schema.gql'), 'utf8')}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    const [user] = await prisma.users({ where: { token } });

    if (!user) {
      throw new Error('Authorization required');
    }

    return { user };
  },
});

server.listen().then(({ url }) => {
  console.log(`[🚀] Server started on port ${url}`);
});
