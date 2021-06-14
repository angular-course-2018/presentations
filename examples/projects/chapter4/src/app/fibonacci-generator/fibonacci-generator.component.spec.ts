import { FibonacciGeneratorComponent } from './fibonacci-generator.component';

describe('FibonacciGeneratorComponent', () => {
    let component: FibonacciGeneratorComponent;

    beforeAll(() => {
        global.console = {log: jest.fn()};
    });

    beforeEach(() => {
        jest.useFakeTimers();
        component = new FibonacciGeneratorComponent();
    });

    it('should generate a series of 8 fibonacci numbers when running start', () => {
        let res = [];
        component.start();
        component.series$.subscribe(series => {
            res = series;
        });
        jest.runAllTimers();

        expect(res).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });

    it('should generate a series of 5 fibonacci numbers when running start and numOfItems is 5', () => {
        component.numOfItems = 5;
        let res = [];
        component.start();
        component.series$.subscribe(series => {
            res = series;
        });
        jest.runAllTimers();

        expect(res).toEqual([1, 1, 2, 3, 5]);
    });
});
