import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div className='home'>
				<br />
				<h4>My Previous Projects</h4>
				<p>Please take a look and reach out if you have any questions!</p>
				<div className='container'>
					<div className='project'>
						<p>An application for BBQ recipes.</p>
						<Link to={'/MeatMaster'}>
							<img
								src={require('./images/meat-master.png')}
								alt='application for bbq recipes'
							/>
						</Link>
					</div>
					<div className='project'>
						<p>Manage fleet vehicles and track service.</p>
						<Link to={'/Fleet'}>
							<img
								src={require('./images/fleet.png')}
								alt='application for managing fleet vehicles'
							/>
						</Link>
					</div>

					<div className='project'>
						<p>D&D monsters and spells from an API.</p>
						<Link to={'/DungeonsAndDragons'}>
							<img
								src={require('./images/D&D.png')}
								alt='Dungeons and Dragons application'
							/>
						</Link>
					</div>
					<div className='project'>
						<p>Quiz game based on GOT.</p>
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
