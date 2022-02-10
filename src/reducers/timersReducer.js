// Import all of our actions
import {
    NEW_TIMER,
    TOGGLE_TIMER,
    UPDATE,
    RESET_TIMER,
    DELETE_TIMER,
} from "../actions";
import Timer from "../Timer";

const timersReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_TIMER:
            // Add a new timer, return a copy of state
            const name = action.payload.name
                ? action.payload.name
                : `Timer ${state.length}`;
            return [...state, new Timer(name)];

        case TOGGLE_TIMER:
            // Invert the isRunning property of timer at index, return a copy of state
            const newState = state.map((timer, index) => {
                if (action.payload.index === index) {
                    return { ...timer, isRunning: !timer.isRunning };
                }
                return timer;
            });
            return newState;

        case UPDATE:
            return state.map((timer) => {
                if (timer.isRunning) {
                    timer = {
                        ...timer,
                        time: (timer.time += action.payload.deltaTime),
                    };
                }
                return timer;
            });

        case RESET_TIMER:
            // reset time
            const newResetState = state.map((timer, index) => {
                if (action.payload.index === index) {
                    return { ...timer, time: 0 };
                }
                return timer;
            });
            return newResetState;

        case DELETE_TIMER:
            // delete timer
            let firstPart = state.slice(0, action.payload.index);
            let secondPart = state.slice(action.payload.index + 1)           
            state = firstPart.concat(secondPart);
            return state;

        default:
            return state;
    }
};

export default timersReducer;
