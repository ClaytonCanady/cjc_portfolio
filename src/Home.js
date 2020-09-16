import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div className='home'>
				<h1>Fullstack Developer</h1>
				<h2>I build things.</h2>

				<Link to='/portfolio'>
					<h3>My Portfolio</h3>
				</Link>
			</div>
		);
	}
}

export default Home;
