import { Calculator } from './calculator';
import { SimpleTipCalculator } from '../simple-tip-calculator';

export class SharedTipCalculator implements Calculator<number> {
  constructor(private simpleTipCalculator: SimpleTipCalculator) {

  }

  calc(money: number, tipInPercent: number, numberOfPeople: number): number {
    return this.simpleTipCalculator.calc(money, tipInPercent) / numberOfPeople;
  }
}
