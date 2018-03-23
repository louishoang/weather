import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { StoreState, City } from './types/index';
import { Provider } from 'react-redux';
import * as Actions from './actions';

const history = createHistory();

const store = createStore<StoreState>(
  rootReducer
);

const defaultCityList: City[] = [
  { id: 1, 
    name: 'San Francisco', 
    lat: 37.562992, 
    long: -122.325525, 
    description: 'moderate rain',
    icon: 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399',
    temp: 14.96
  },
  {
    id: 2,
    name: 'Hayward',
    lat: 37.668821,
    long: -122.080796,
    icon: 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964',
    temp: 13.09,
    description: 'overcast clouds'
  }
];

store.dispatch(Actions.fetchCitiesSucceeded(defaultCityList));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
