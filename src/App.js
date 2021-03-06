import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Home from './Home';
import GameOfThrones from './GameOfThrones'
import DungeonsAndDragons from './DungeonsAndDragons';
import Fleet from './Fleet';
import MeatMaster from './MeatMaster';
import Resume from './Resume'
class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='sidebar'>
					<img src={require('./images/me.png')} alt='Me' />
					<h2>Clayton Canady</h2>
					<nav>
						<Link to='/'>
							<p>Home</p>
						</Link>
						<Link to='/about-me'>
							<p>About Me</p>
						</Link>
						<Link to='/resume'>
							<p>Resume</p>
						</Link>
						<Link to='/contact-me'>
							<p>Contact</p>
						</Link>
					</nav>
				</div>

				<main>
					<Route path='/' exact component={Home} />

					<Route path='/GameOfThrones' component={GameOfThrones} />
					<Route path='/DungeonsAndDragons' component={DungeonsAndDragons} />
					<Route path='/Fleet' component={Fleet} />
					<Route path='/MeatMaster' component={MeatMaster} />
					<Route path='/about-me' component={AboutMe} />
					<Route path='/resume' component={Resume} />
					<Route path='/contact-me' component={ContactMe} />
				</main>
			</div>
		);
	}
}

export default App;
