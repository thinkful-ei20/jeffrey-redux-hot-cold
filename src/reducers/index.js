import {MAKE_GUESS} from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
  if(action.type === MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    });
  }
  return state;
};