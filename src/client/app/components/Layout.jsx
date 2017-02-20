import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import Carousel from './carousel.jsx';
import UserGreeting from './introduction.jsx';
import ContactCard from './contactInfo.jsx';
import WorkingHours from './working.jsx';

export default class Layout extends React.Component {
  render () {
    return <div className = "container-fluid" >	
    <Header/>
    <h1>Welcome to Leaside dental</h1>
    <div className="row">
    	<div className="col-md-9">
    		<Carousel/>
    	</div>
    	<div className="col-md-3">
    		<ContactCard/>
    	</div>
    </div>
     <div className="row">
		<div className="col-md-6">
			<UserGreeting/>
		</div>
		<div className="col-md-6">
    		<div className="row">
	    		<div className="col-md-6">
	    			<WorkingHours/>
	    		</div>
	    		<div className="col-md-6">
	    			<ContactCard/>
	    		</div>
    		</div>	    			
		</div>
    </div>
   	 
    </div>
  }
}