import type { FinanceConfig } from "./finance-config.js";

import { PersonalDetailsAspect, PersonalDetailsBrowser } from "@itaysso/harmony-feature.personal-details";
import { useFinance } from "@itaysso/harmony-second-feature.hooks.use-finance";

export class FinanceBrowser {
    constructor(private config: FinanceConfig) { }

    static dependencies = [PersonalDetailsAspect];

    static defaultConfig: FinanceConfig = {};

    static async provider([creditAspect]: [
        PersonalDetailsBrowser
    ], config: FinanceConfig) {
        const finance = new FinanceBrowser(config);

        creditAspect.registerDashboardWidget([
            {
                name: 'finance widget',
                component: () => {
                    const isFinanceOk = useFinance();
                    return (<div style={{ backgroundColor: 'yellow' }}>{`Finance status: ${isFinanceOk}`}</div>);
                },
            },
        ]);
        return finance;
    }
}

export default FinanceBrowser;

