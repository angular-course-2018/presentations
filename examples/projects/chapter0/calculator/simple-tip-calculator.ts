export class SimpleTipCalculator {
  calc(money: number, tipInPercent: number): number {
    return money + money * (tipInPercent / 100);
  }

}
