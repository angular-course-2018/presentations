import { Calculator } from './calculator';

export class CalculatorManager {
  readonly calculators: Map<Calculator<unknown>, unknown[]> = new Map();

  push(calculator: Calculator<unknown>, ...args: unknown[]) {
    if (this.calculators.has(calculator)) {
      throw new Error('Calculator already exist');
    }

    this.calculators.set(calculator, args);
  }

  calculate() {
    const results: unknown[] = [];
    this.calculators.forEach((args, calculator) => {

      results.push(calculator.calc(...args));
    });

    return results;
  }
}
