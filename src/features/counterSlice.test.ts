import counterReducer, { decrement, increment, incrementByAmount } from "./counterSlice";

describe('counter reducer', () => {
    it('should handle initial state', () => {
        expect(
            counterReducer(
                undefined,
                { type: "" }
            )
        )
            .toEqual({ value: 0 });
    });

    it('should handle increment', () => {
        expect(
            counterReducer(
                { value: 1 },
                increment()
            )
        )
            .toEqual({ value: 2 })
    });

    it('should handle decrement', () => {
        expect(
            counterReducer(
                { value: 1 },
                decrement()
            )
        )
            .toEqual({ value: 0 })
    });

    it('should handle incrementByAmount', () => {
        expect(
            counterReducer(
                { value: 1 },
                incrementByAmount(5)
            )
        )
            .toEqual({ value: 6 })
    });

    it('should handle decrement below zero', () => {
        expect(
            counterReducer(
                { value: 0 },
                decrement()
            )
        )
            .toEqual({ value: -1 });
    });

    it('should handle incrementByAmount with negative value', () => {
        expect(
            counterReducer(
                { value: 10 },
                incrementByAmount(-3)
            )
        )
            .toEqual({ value: 7 });
    });
});