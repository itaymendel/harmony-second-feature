import { SymphonyPlatformAspect, SymphonyPlatformNode } from "@bitdev/symphony.symphony-platform";
import type { FinanceConfig } from "./finance-config.js";
import { financeGqlSchema } from "./finance.graphql.js";

export class FinanceNode {
    constructor(private config: FinanceConfig) { }

    static dependencies = [SymphonyPlatformAspect];

    static defaultConfig: FinanceConfig = {};

    static async provider([symphonyPlatform]: [
        SymphonyPlatformNode
    ], config: FinanceConfig) {
        const finance = new FinanceNode(config);
        const gqlSchema = financeGqlSchema();

        symphonyPlatform.registerBackendServer([
            {
                name: 'finance-bff',
                gql: gqlSchema,
            },
        ]);

        return finance;
    }
}

export default FinanceNode;

