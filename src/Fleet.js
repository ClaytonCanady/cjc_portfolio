import React, { Component } from 'react';

class Fleet extends Component {
	render() {
		return (
			<div className='single-project'>
				<h3>Fleet Vehicle Management</h3>
				<h4>Description</h4>
				<p>
					Fleet Vehicle management is a project I collaborated with three other
					engineers on. It is an application for companies to keep track of
					their fleet of vehicles and when they need to be serviced. Test
					credentials for the site are Email: testcreds@gmail.com Password:
					password123
				</p>
				<a href='https://warm-brook-93750-dev.herokuapp.com/' target='blank'>
					Deployed Site
				</a>
				<br />
				<a
					href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'
					target='blank'>
					Github Repo Front-End
				</a>
				<br />
				<a
					href='https://github.com/SEIR622-Cass-theCassettes/fleet-backend'
					target='blank'>
					Github Repo Back-End
				</a>
				<h4>Time Frame</h4>
				<p>This project was a collaboration over the course of two weeks.</p>
				<ul>
					<h4>Features</h4>
					<li>1: Login/out and create new user.</li>
					<li>2: Email Validation.</li>
					<li>3: Add or edit vehicles attached to your account.</li>
					<li>4: Add notes to vehicles and set their operational status.</li>
				</ul>
				<ul>
					<h4>Tech-Stack</h4>
					<li>React</li>
					<li>Css</li>
					<li>React Bootstrap</li>
					<li>React router and React Router DOM</li>
					<li>React Hooks</li>
					<li>Axios</li>
					<li>Mongo DB</li>
				</ul>
				<ul>
					<h4>Collaborators</h4>
					<li>
						<a href='https://www.linkedin.com/in/joshua-favre/' target='blank'>
							Joshua Farve
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/cassio-hudson/' target='blank'>
							Cassio Hudson
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/thomas-caldwell-huntingtonbeach/'
							target='blank'>
							Thomas Caldwell
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Fleet;
