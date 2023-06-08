import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  generates: {
    "src/graphql/generated/api/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
      config: {
        enumsAsTypes: true,
        futureProofEnums: true,
        contextType: "@/graphql/context#ApolloContext",
        enumsAsConst: true,
      },
      hooks: { afterOneFileWrite: ["prettier --write"] },
    },
  },
};

export default config;
