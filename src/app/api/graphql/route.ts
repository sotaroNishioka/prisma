import assert from "node:assert";
import { ApolloServer } from "@apollo/server";
import { NextResponse } from "next/server";
import { Post, Resolvers } from "@/generated/graphql";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolver";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function POST(request: Request): Promise<NextResponse> {
  const json = await request.json();
  const res = await server.executeOperation({ query: json.query });
  assert(res.body.kind === "single");
  return NextResponse.json(res.body.singleResult);
}

export async function GET(request: Request) {
  return handler(request);
}
