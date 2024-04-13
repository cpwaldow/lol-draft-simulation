import { AnyAction } from 'redux';

const initialState = {
  title: 'BAN A CHAMPION',
};

const titleReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title:
          state.title === 'BAN A CHAMPION'
            ? 'CHOOSE YOUR CHAMPION'
            : 'BAN A CHAMPION',
      };
    default:
      return state;
  }
};

export default titleReducer;
