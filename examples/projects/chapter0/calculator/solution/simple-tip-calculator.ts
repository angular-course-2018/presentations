import { Calculator } from './calculator';

export class SimpleTipCalculator implements Calculator<number> {
  calc(money: number, tax: number): number {
    return money + money * (tax / 100);
  }

}
