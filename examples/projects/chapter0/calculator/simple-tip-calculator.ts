export class SimpleTipCalculator {
  calc(money: number, tax: number): number {
    return money + money * (tax / 100);
  }

}
