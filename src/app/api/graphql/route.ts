import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloContext, createContext } from "@/graphql/context";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolver";

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => ({
    ...createContext(),
  }),
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
