import { loadAspect } from "@bitdev/harmony.testing.load-aspect";
import type { FinanceNode } from "./finance.node.runtime.js";
import { FinanceAspect } from "./finance.aspect.js";

it('should retrieve the aspect', async () => {
    const finance = await loadAspect<FinanceNode>(FinanceAspect, {
        runtime: 'node',
    });

    expect(finance).toBeTruthy();
});

