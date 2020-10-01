import React, { Component } from 'react';

class MeatMaster extends Component {
	render() {
		return (
			<div className='single-project'>
				<h3>Meat Master</h3>
				<h4>Description</h4>
				<p>
					Meat Master is an application for the storage and viewing of barbecue
					recipes. This product includes user authorization which is the feature
					I am most proud of given the short time frame for the project. Test
					credentials for the site are Username: testcreds Password: password123
				</p>
				<a href='https://meat-master-front.herokuapp.com/' target='blank'>
					Deployed Site
				</a>
				<br />
				<a
					href='https://github.com/ClaytonCanady/meat-master-frontend'
					target='blank'>
					Github Repo Front-End
				</a>
				<br />
				<a
					href='https://github.com/ClaytonCanady/meat-master-backend'
					target='blank'>
					Github Repo Back-End
				</a>
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
