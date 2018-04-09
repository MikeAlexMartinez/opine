import { BUTTON_PRESS } from '../actions/buttonPress';

export default function buttonPresses (state = {}, action) {
  switch (action.type) {
    case BUTTON_PRESS:
      const currentCount = state.count || 0;
      return {
        ...state,
        count: currentCount + action.increment
      };
    default:
      return state;
  }
}
