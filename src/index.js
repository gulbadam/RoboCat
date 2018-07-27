import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    createStore
} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons/css/tachyons.css';
import {searchRobots} from './reducers';
//const rootReducers = ({searchRobots});
const store = createStore(searchRobots);

ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
