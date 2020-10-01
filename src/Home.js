import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div className='home'>
				
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
