import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		return (
			<div className='about-me'>
				<br />
				<br />
				<h4>Thank You for Visiting my Page!</h4>
				<p>
					With my unusual background for the industry and ever growing skillset
					I would be a valuable asset to your team. I am a swift learner and
					exceed at both leading and working with teams to deliver results.
				</p>

				<h4>Not Just a Programmer.</h4>
				<p>
					My background covers an abundance of skills. Along with my coding
					capabilities I was a team leader in the military and enjoy working
					closely with a team. Whether the situation requires me to lead or
					follow I always deliver results.
				</p>
				<h4>What can I bring to the table?</h4>
				<ul>
					<li>Css</li>
					<li>Vanilla JS</li>
					<li>React</li>
					<li>Django</li>
					<li>Python</li>
					<li>Mongo DB</li>
					<li>Apis</li>
				</ul>
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
			</div>
		);
	}
}

export default AboutMe;
