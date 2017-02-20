import React from 'react';
import {render} from 'react-dom';


export default class WorkingHours extends React.Component {
  render () {

  return <div className="card">
  <h4 className="card-header">Working Hours</h4>
  <div className="card-block">
    <p className="card-text">Below are our working hours, feel free to reachout and schedule an appointment. <strong>Note : </strong> we are closed on Sunday and Monday</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Saturday : 9:00 AM - 6:00 PM</li>
    <li className="list-group-item">Tuesday : </li>
    <li className="list-group-item">Wednesday :</li>
    <li className="list-group-item">Thursday :</li>
    <li className="list-group-item">Friday :</li>
  </ul>
  <div className="card-block">
    <a href="#" className="card-link">Availability</a>
    <a href="#" className="card-link">Schedule an Appointment</a>
  </div>
</div>
  }
}