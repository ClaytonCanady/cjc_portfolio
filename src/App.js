import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Home from './Home'
class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='sidebar'>
					<img src={require('./images/me.png')} alt='game of thrones quiz' />
					<h2>Clayton Canady</h2>
					<nav>
						<Link to='/'>
							<p>Home</p>
						</Link>
						<Link to='/about-me'>
							<p>About Me</p>
						</Link>
						<Link to='/portfolio'>
							<p>Portfolio</p>
						</Link>
						<Link to='/contact-me'>
							<p>Contact</p>
						</Link>
					</nav>
				</div>

				<main>
					<Route path='/' exact component={Home} />
					<Route path='/portfolio' component={Portfolio} />
					<Route path='/about-me' component={AboutMe} />

					<Route path='/contact-me' component={ContactMe} />
				</main>
			</div>
		);
	}
}

export default App;
