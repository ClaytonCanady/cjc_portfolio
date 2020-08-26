import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import Home from './Home'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import ContactMe from './ContactMe'
function App() {
  return (
		<div className='App'>
			<header>
				<h1>Clayton Canady</h1>
				<h2>Full Stack Dev</h2>
				<Nav variant='tabs'>
					<Link to='/'>
						<Button variant='dark'>Home</Button>
					</Link>
					<Link to='/about-me'>
						<Button variant='dark'>About Me</Button>
					</Link>
					<Link to='/portfolio'>
						<Button variant='dark'>Portfolio</Button>
					</Link>
					<Link to='/contact-me'>
						<Button variant='dark'>Contact</Button>
					</Link>
				</Nav>
			</header>

			<main>
				<Route path='/' exact component={Home} />
				<Route path='/about-me' component={AboutMe} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/contact-me' component={ContactMe} />
			</main>
		</div>
	);
}

export default App;
