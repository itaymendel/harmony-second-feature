import { useQuery, gql } from "@apollo/client";

export const IS_FINANCE_OK = gql `
  query IS_FROZEN {
    isFinanceOk
  }
`;

export function useFinance(skip = false): boolean {
    const results = useQuery(IS_FINANCE_OK, {
        skip,
    });

    if (results.loading)
        return undefined;
    if (!results.data?.isFinanceOk)
        return null;

    return results.data.isFinanceOk;
}

