import { prisma } from '../generated/prisma-client';
import { QueryResolvers } from '@chat/data-access';

export const Query: QueryResolvers = {
  users: async () => await prisma.users(),
  channels: async () => await prisma.channels(),
  messages: async (parent, { channel }) => await prisma.channel({ id: channel }).messages(),
};
