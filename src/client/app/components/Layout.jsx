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
    <div className="row ml-md-1 mr-md-1 bg-green2 inverse">
      <div className="col-md-9">
        <h3 className="text-white">Changing Lives For The Better, One Smile At a Time</h3>
      </div>
      <div className="col-md-3">
        <h4 className="text-primary"><strong>Accepting New Patients..</strong></h4>
      </div>
    </div>
    <div className="row">
    	<div className="col-md-9">
    		<Carousel/>
    	</div>
    	<div className="col-md-3">
    		<ContactCard/>
    	</div>
    </div>
     <div className="row">
		<div className="col-md-9">
			<UserGreeting/>
		</div>
		<div className="col-md-3">    	
	    <WorkingHours/>    			
		</div>
    </div>
   	 
    </div>
  }
}