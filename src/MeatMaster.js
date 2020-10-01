import React, { Component } from 'react';

class MeatMaster extends Component {
	render() {
		return (
			<div className='single-project'>
				<h3>Meat Master</h3>
				<h4>Description</h4>
				<p>
					This project was my very first undertaking. It is a quiz game based on
					the hit series and show Game of Thrones. The most challenging and also
					the component that I am most proud of is the high score keeping
					capability. Questions are stored in an array of objects along with the
					answer choices, correct answer, and the correction that will be
					displayed at the end for all missed. I had to write functions for
					handling the users answer, displaying results, resetting the quiz, and
					starting.
				</p>
				<h4>Time Frame</h4>
				<p>This project was a solo build over the course of two weeks.</p>
				<ul>
					<h4>Features</h4>
					<li>1: Login/out and create new user.</li>
					<li>2: View all recipes that have been added</li>
					<li>3: Add, edit, or delete recipes attached to your account.</li>
					<li>4: Responsive nav bar.</li>
					<li>5: All recipes show the posters username.</li>
				</ul>
				<ul>
					<h4>Tech-Stack</h4>
					<li>React</li>
					<li>Css</li>
					<li>React Bootstrap</li>
					<li>React router and React Router DOM</li>
					<li>React Hooks</li>
					<li>Axios</li>
					<li>Django</li>
					<li>Python</li>
				</ul>
			</div>
		);
	}
}

export default MeatMaster;
