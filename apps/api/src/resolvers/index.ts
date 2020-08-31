import { resolve } from 'url';
import { checkForResolveTypeResolver } from 'apollo-server';

import { Query } from './Query';
import { Mutation } from './Mutation';
import { Resolvers } from '@chat/data-access';

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
