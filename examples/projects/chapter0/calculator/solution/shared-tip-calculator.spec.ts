import { SharedTipCalculator } from './shared-tip-calculator';
import { SimpleTipCalculator } from '../simple-tip-calculator';

describe('simple tip calculator', () => {
  let calculator: SharedTipCalculator;
  beforeEach(() => {
    calculator = new SharedTipCalculator(new SimpleTipCalculator());
  });

  it('should calculate 115USD for 100USD money and 15% tip', () => {
    // given
    expect.hasAssertions();
    // when
    const result = calculator.calc(100, 25, 5);
    // then
    expect(result).toBe(25);
  });
});
