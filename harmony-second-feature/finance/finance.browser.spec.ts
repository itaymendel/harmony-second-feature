import { loadAspect } from "@bitdev/harmony.testing.load-aspect";
import type { FinanceBrowser } from "./finance.browser.runtime.js";
import { FinanceAspect } from "./finance.aspect.js";

it('should retrieve the aspect', async () => {
    const finance = await loadAspect<FinanceBrowser>(FinanceAspect, {
        runtime: 'browser',
    });

    expect(finance).toBeTruthy();
});

