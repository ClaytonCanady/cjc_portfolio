import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div className='home'>
				<h4>Who am I?</h4>
				<p>
					My name is Clayton Canady, I am a fullstack developer currently living in North Carolina. I am looking for an opportunity to relocate, hopefully to Austin, Texas. I am an army veteran and also have a background
					in welding and fabrication. My interests include spending time outdoors whether that be hiking, hunting, grilling, or fishing. I also enjoy playing games with friends and family, both online and in tabletop format.
				</p>
				
				<h4>Some of my previous projects.</h4>
				<div className='container'>
					<div className='project'>
						<Link to={'/MeatMaster'}>
							<img
								src={require('./images/meat-master.png')}
								alt='application for bbq recipes'
							/>
						</Link>
					</div>
					<div className='project'>
						<Link to={'/Fleet'}>
							<img
								src={require('./images/fleet.png')}
								alt='application for managing fleet vehicles'
							/>
						</Link>
					</div>
					<div className='project'>
						<Link to={'/DungeonsAndDragons'}>
							<img
								src={require('./images/D&D.png')}
								alt='Dungeons and Dragons application'
							/>
						</Link>
					</div>
					<div className='project'>
						<Link to={'/GameOfThrones'}>
							<img
								src={require('./images/game-of-thrones.png')}
								alt='game of thrones quiz'
							/>
						</Link>
					</div>
				</div>
				{/* <Link to='/portfolio'>
					<h3>My Portfolio</h3>
				</Link> */}
			</div>
		);
	}
}

export default Home;
