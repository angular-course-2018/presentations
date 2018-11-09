import { CalculatorManager } from './calculator-manager';
import { SimpleTipCalculator } from './simple-tip-calculator';

describe('calculator manager', () => {
  it('should return result from a single tax calculator calculation', () => {
    // given
    const calculatorManager = new CalculatorManager();
    calculatorManager.push(new SimpleTipCalculator(), 100, 15);

    // when
    const results = calculatorManager.calculate();

    // then

    expect(results.length).toBe(1);
    const simpleCalculatorResponse = results[0] as number;

    expect(simpleCalculatorResponse).toBe(115);
  });
});
