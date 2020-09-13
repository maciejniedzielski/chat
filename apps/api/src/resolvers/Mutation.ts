import { prisma } from '../generated/prisma-client';
import * as jwt from 'jsonwebtoken';

const expiresIn = '7d';

export const Mutation = {
  createUser: async (parent, { name }) => {
    let user = await prisma.createUser({ name });
    const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn });
    user = await prisma.updateUser({
      data: {
        token,
      },
      where: { id: user.id },
    });

    return user;
  },
  createChannel: async (parent, { name }) => await prisma.createChannel({ name }),
  createMessage: async (parent, { message, channel }, ctx) => {
    console.log(ctx);
    const newMessage = {
      message,
      author: {
        connect: { id: ctx.user.id },
      },
      channel: {
        connect: { id: channel },
      },
    };

    return prisma.createMessage(newMessage);
  },
};
