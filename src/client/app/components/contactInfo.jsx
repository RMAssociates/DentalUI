import React from 'react';
import {render} from 'react-dom';


export default class ContactCard extends React.Component {
  render () {
		return <div className="card">
		  <h4 className="card-header">Contact Information</h4>
		  <div className="card-block">
		    <h5 className="card-title">Special title treatment</h5>
		    <p className="card-text">You can drop us a message by filling in your contact information and our staff will
		     assist in providing you any appropriate information you are looking for..</p>
		    <a href="#" className="btn btn-primary">Contact Us</a>
		  </div>
		</div>
	}
}