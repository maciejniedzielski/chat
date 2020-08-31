import { prisma } from '../generated/prisma-client';
import { MutationResolvers } from '@chat/data-access';

export const Mutation: MutationResolvers = {
  createUser: async (parent, { name }) => await prisma.createUser({ name }),
};
