// import {createStore} from 'redux';
// import {gameReducer} from './reducers/index';

// export default createStore(gameReducer);

import {createStore} from 'redux';

import reducer from './reducers';

export default createStore(reducer);