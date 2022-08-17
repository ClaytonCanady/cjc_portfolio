import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import myResume from './CJCresume.pdf';

class Resume extends Component {
	render() {
		return (
			<div className='resume'>
				<a href={myResume} download='./CJCresume.pdf'>
					<Button className='my-3'>Download PDF</Button>
				</a>
				<br />
				<img
					
					src={require('./images/CJCresume.png')}
					alt='my resume'
				/>
				<br />
			</div>
		);
	}
}

export default Resume;
