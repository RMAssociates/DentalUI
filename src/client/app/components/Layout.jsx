import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';

export default class Layout extends React.Component {
  render () {
    return <div className = "container-fluid" >	
    <Header/>
   	 <h1>Layout</h1>
    </div>
  }
}