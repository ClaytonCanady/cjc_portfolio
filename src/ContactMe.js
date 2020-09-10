import React, { Component } from 'react';

class ContactMe extends Component {
	render() {
		return (
			<div className='text'>
				{/* <h4>Lets Connect!</h4> */}
				<h4>
					<a
						href='https://docs.google.com/document/d/1OERp842sQrLHw60KSchkT2vjUxUtqUcDKTZ43UmG0-Y/edit?usp=sharing'
						target='blank'>
						Resume
					</a>
				</h4>
				<h4>
					<a
						href='https://www.linkedin.com/in/clayton-canady-dev/'
						target='blank'>
						LinkedIn
					</a>
				</h4>
				<h4>
					<a href='https://github.com/ClaytonCanady' target='blank'>
						Github
					</a>
				</h4>

				<h5>Email: cjcanady1113@gmail.com</h5>
				<h5>Phone: 1-910-305-6588</h5>
			</div>
		);
	}
}

export default ContactMe;
