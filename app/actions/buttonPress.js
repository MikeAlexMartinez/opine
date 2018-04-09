// constant
export const BUTTON_PRESS = 'BUTTON_PRESS';

// action creator
function buttonPress (increment) {
  return {
    type: BUTTON_PRESS,
    increment
  };
}

// async function handler
export function handleButtonPress (increment) {
  return (dispatch, getState) => {
    dispatch(buttonPress(increment));
  }
}
