import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

//++++ Redux testing
import store from './store';
import {makeGuess} from './actions';

store.dispatch(makeGuess(50));

console.log(store.getState());
//---- Redux testing

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
