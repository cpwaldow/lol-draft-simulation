import { AnyAction } from 'redux';
import { ChampionPageStateType } from '../../types';

const initialState: ChampionPageStateType[] = [];

const championsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_CHAMPIONS':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default championsReducer;
