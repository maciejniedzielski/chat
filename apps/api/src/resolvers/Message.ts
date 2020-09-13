import { prisma } from '../generated/prisma-client';

export const Message = {
  author: async (parent) => await prisma.message({ id: parent.id }).author(),
  channel: async (parent) => await prisma.message({ id: parent.id }).channel(),
};
