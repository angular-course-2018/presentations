import { SimpleTipCalculator } from './simple-tip-calculator';

describe('simple tip calculator', () => {
  let calculator: SimpleTipCalculator;
  beforeEach(() => {
    calculator = new SimpleTipCalculator();
  });

  it('should calculate 115USD for 100USD money and 15% tip', () => {
    // given
    expect.hasAssertions();
    // when
    const result = calculator.calc(100, 15);
    // then
    expect(result).toBe(115);
  });
});
