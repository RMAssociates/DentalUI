import React from 'react';
import {render} from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Layout from './components/Layout.jsx';
//import Layout from './components/offerings/cosmetics.jsx';
//import Layout from './components/offerings/crowns.jsx';
import AboutUs from './components/sitemap/aboutus.jsx';
import MeetOurDoctor from './components/sitemap/meetourdoctor.jsx';

require('./styles/main.scss');
import '../../../node_modules/tether/dist/js/tether.min';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min';


import reducers from './reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


class App extends React.Component {
  render () {
    return <Layout/>;
  }
}

render(<Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="about" component={AboutUs}/>
        <Route path="ourdoctor" component={MeetOurDoctor}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));