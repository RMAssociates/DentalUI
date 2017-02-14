import React from 'react';
import {render} from 'react-dom';
//
// import Header from './components/header.jsx';

require('./styles/main.scss');
import '../../../node_modules/tether/dist/js/tether.min';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min';

class App extends React.Component {
  render () {
    return <p> Hello Ainafee 4</p>;
  }
}

render(<App/>, document.getElementById('app'));