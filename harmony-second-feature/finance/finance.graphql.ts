import { GqlSchema } from "@bitdev/symphony.backends.backend-server";
import { gql } from "graphql-tag";

export function financeGqlSchema(): GqlSchema {
    return {
        typeDefs: gql `
      type Query {
        isFinanceOk: Boolean
      }
    `,
        resolvers: {
            Query: {
                isFinanceOk: async () => {
                    return true;
                },
            },
        },
    };
}

