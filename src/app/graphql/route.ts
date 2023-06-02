import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolver";
import { NextResponse } from "next/server";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const response = await apolloServer.executeOperation({
    query: json.query,
  });
  return NextResponse.json(response);
}
