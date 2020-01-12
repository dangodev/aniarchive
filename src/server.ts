if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

import { GraphQLServer } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';

new GraphQLServer({ schema, context: createContext }).start(({ port }) =>
  console.log(
    `🚀 Server ready at: http://localhost:${port}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#5-using-the-graphql-api`
  )
);
