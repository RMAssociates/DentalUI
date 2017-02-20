import React from 'react';
import {render} from 'react-dom';
import Navigator from './navigation.jsx';
export default class Header extends React.Component {
  render () {
    return <div className="row-fluid" >
    		<div className="row-fluid">
    			<Navigator/>
    		</div>
    		<div className="row">
    			<div className="col-md-6"> </div>
	    		<div className="col-md-6">
	    			<p> Contact Information</p>
	    		</div>
    		</div>

    </div>
  }
}