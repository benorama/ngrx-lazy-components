export namespace CounterActions {

    export const Types = {
        INCREMENT: '[Counter] Increment',
        DECREMENT: '[Counter] Decrement',
        RESET: '[Counter] Reset'
    };

    export class IncrementAction {
        readonly type = Types.INCREMENT;

        constructor() {
        }
    }

    export class DecrementAction {
        readonly type = Types.DECREMENT;

        constructor() {
        }
    }

    export class ResetAction {
        readonly type = Types.RESET;

        constructor() {
        }
    }

    export type Actions =
        IncrementAction
        | DecrementAction
        | ResetAction;


}

