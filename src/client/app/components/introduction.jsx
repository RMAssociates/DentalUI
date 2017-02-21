import React from 'react';
import {render} from 'react-dom';

export default class UserGreeting extends React.Component {
  render () {
	return <div className="jumbotron">
  <h1 className="display-4">Welcome to Leaside Dental</h1>
  <p className="lead">When you need a dentist and a highly trained staff to handle your dental health issues,
   come to Leaside Village Dental. Our office is located in Toronto, ON, and it's a great place to receive comprehensive care.
    We assist both children and adults, and we'd love the chance to improve your smile.</p>
  <hr className="my-4"/>
  <p>Offering personalized care that's designed with each patient's specific treatment goals in mind,
   we do our best to make our office environment comfortable and relaxing.
   We want you to show off your smile, so we offer several services, including.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg"  role="button">Learn more</a>
  </p>
</div>
}
}