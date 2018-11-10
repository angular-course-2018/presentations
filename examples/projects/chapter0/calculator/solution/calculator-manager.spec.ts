import { CalculatorManager } from './calculator-manager';
import { SimpleTipCalculator } from './simple-tip-calculator';
import { SharedTipCalculator } from './shared-tip-calculator';

describe('calculator manager', () => {
  let calculatorManager: CalculatorManager;
  beforeEach(() => {
    calculatorManager = new CalculatorManager();
  });

  it('should return result from a single tax calculator calculation', () => {
    // given
    calculatorManager.push(new SimpleTipCalculator(), 100, 15);

    // when
    const results = calculatorManager.calculate();

    // then

    expect(results.length).toBe(1);
    const simpleCalculatorResponse = results[0] as number;

    expect(simpleCalculatorResponse).toBe(115);
  });

  it('should throw an arror if the same calculator is beign added twice', () => {
    // given
    const simpleCalculator = new SimpleTipCalculator();
    calculatorManager.push(simpleCalculator, 100, 15);
    // when

    //  then
    expect(calculatorManager.push.bind(calculatorManager, simpleCalculator, 100, 15)).toThrow();
  });

  it('should return 2 results for mmultiple calculators', () => {
    // given
    const simpleCalculator = new SimpleTipCalculator();
    const sharedCalculator = new SharedTipCalculator(simpleCalculator);
    // when
    calculatorManager.push(simpleCalculator, 100, 15);
    calculatorManager.push(sharedCalculator, 100, 25, 5);

    const [simpleCalculatorResponse, sharedCaclulatorResponce] = calculatorManager.calculate();
    // then

    expect(simpleCalculatorResponse).toBe(115);
    expect(sharedCaclulatorResponce).toBe(25);
  });
});
