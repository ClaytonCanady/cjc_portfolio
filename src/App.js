import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Projects from './Projects';
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
					<Link to='/'>
					<img src={require('./images/me.png')} alt='Me' />
					</Link>
					
					<h2>Clayton Canady</h2>
					<nav>
					
						<Link to='/Projects'>
							<p>Projects</p>
						</Link>
						<Link to='/resume'>
							<p>Resume</p>
						</Link>
					</nav>
				</div>

				<main>
					<Route path='/' exact component={Home} />
					<Route path='/GameOfThrones' component={GameOfThrones} />
					<Route path='/DungeonsAndDragons' component={DungeonsAndDragons} />
					<Route path='/Fleet' component={Fleet} />
					<Route path='/MeatMaster' component={MeatMaster} />
					<Route path='/Projects' component={Projects} />
					<Route path='/resume' component={Resume} />
				</main>
				<div className='footer'>	
					<a
						href='https://www.linkedin.com/in/clayton-canady-dev/'
						target='blank'>
						LinkedIn
					</a>
					<a href='https://github.com/ClaytonCanady' target='blank'>
						Github
					</a>
					<br/>
					<p>cjcanady1113@gmail</p> <p>910-305-6588</p>
					</div>
			</div>
		);
	}
}

export default App;
