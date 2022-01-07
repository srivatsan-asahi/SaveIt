
import { DECREASE_COUNTER, INCREASE_COUNTER } from '../action'

const initialState = {
    count: 0
}


const CounterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREASE_COUNTER:
            return { count: state.count + 1 }
        case DECREASE_COUNTER:
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default CounterReducer;

