import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Resume from './Resume';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
					<h1>Clayton Canady</h1>
					<h2>Full Stack Developer</h2>
					<Nav variant='tabs'>
						<Link to='/'>
							<Button variant='dark'>Home</Button>
						</Link>
						<Link to='/about-me'>
							<Button variant='dark'>About Me</Button>
						</Link>
					
						<Link to='/resume'>
							<Button variant='dark'>Resume</Button>
						</Link>
						<Link to='/contact-me'>
							<Button variant='dark'>Contact</Button>
						</Link>
					</Nav>
				</header>

				<main>
					<Route path='/' exact component={Portfolio} />
					<Route path='/about-me' component={AboutMe} />
				
					<Route path='/contact-me' component={ContactMe} />
					<Route path='/resume' component={Resume} />
				</main>
			</div>
		);
	}
}

export default App;
