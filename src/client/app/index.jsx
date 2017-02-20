import React from 'react';
import {render} from 'react-dom';
import Layout from './components/Layout.jsx';

require('./styles/main.scss');
import '../../../node_modules/tether/dist/js/tether.min';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min';

class App extends React.Component {
  render () {
    return <Layout/>;
  }
}

render(<App/>, document.getElementById('app'));