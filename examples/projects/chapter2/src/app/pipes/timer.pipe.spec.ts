import { TimerPipe } from './timer.pipe';

describe('TimerPipe', () => {
    it('should add padding 0 when minutes is 1 number digit', () => {
        const pipe = new TimerPipe();
        const res = pipe.transform({minutes: 2, seconds: 12});
        expect(res).toEqual('02:12');
    });
    it('should add padding 0 when seconds is 1 number digit', () => {
        const pipe = new TimerPipe();
        const res = pipe.transform({minutes: 12, seconds: 1});
        expect(res).toEqual('12:01');
    });
});
