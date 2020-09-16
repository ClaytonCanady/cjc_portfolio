import React, { Component } from 'react';
import './Portfolio.css';
class Portfolio extends Component {
	render() {
		return (
			<div>
				<h3>My Projects</h3>
				<div className='container'>
					<div className='project'>
						<a
							href='https://claytoncanady.github.io/Game-of-Thrones-Quiz/'
							target='blank'>
							<img
								src={require('./images/game-of-thrones.png')}
								alt='game of thrones quiz'
							/>
						</a>
						<p className='desc'>
							This was my very first project, a quiz game based on the hit show
							Game of Thrones. Features include high score tracking.
						</p>
					</div>
					<div className='project'>
						<a
							href='https://dungeons-and-dragons-info.herokuapp.com/'
							target='blank'>
							<img
								src={require('./images/D&D.png')}
								alt='Dungeons and Dragons application'
							/>
						</a>
						<p className='desc'>
							An application that accesses an external api to display
							information on Dungeons and Dragons. All lists returned are
							filterable.
						</p>
					</div>
					<div className='project'>
						<a
							href='https://warm-brook-93750-dev.herokuapp.com/'
							target='blank'>
							<img
								src={require('./images/fleet.png')}
								alt='application for managing fleet vehicles'
							/>
						</a>
						<p className='desc'>
							A full stack product that I collaborated with three other
							engineers on. It is an application for companies to manage their
							fleet of vehicles.
						</p>
					</div>
					<div className='project'>
						<a href='https://meat-master-front.herokuapp.com//' target='blank'>
							<img
								src={require('./images/meat-master.png')}
								alt='application for bbq recipes'
							/>
						</a>
						<p className='desc'>
							Meat Master is a fullstack project I undertook alone. It is for the posting and viewing of bbq recipes. Test credentials for the site are Username: testcreds Password: password123
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
