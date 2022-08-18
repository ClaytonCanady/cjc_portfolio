import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'
class Projects extends Component {
	render() {
		return (
			<div className='projects_container'>

<br />
				<h3>My Previous Projects</h3>
				
				<div className='container'>
					<div className='projects'>

						<div className='project'>
						<Card>
						<Card.Title>An application for BBQ recipes.</Card.Title>
						<Link to={'/MeatMaster'}>
							<Card.Img
								src={require('./images/meat-master.png')}
								alt='application for bbq recipes'
							/>
						</Link>
					</Card>
						</div>
				

					<div className='project'>
					<Card>
						<Card.Title>Manage fleet vehicles and track service.</Card.Title>
						<Link to={'/Fleet'}>
							<Card.Img
								src={require('./images/fleet.png')}
								alt='application for managing fleet vehicles'
							/>
						</Link>
					</Card>
							</div>
				


					<div className='project'>
							
					<Card>
						<Card.Title>D&D monsters and spells from an API.</Card.Title>
						<Link to={'/DungeonsAndDragons'}>
							<Card.Img
								src={require('./images/D&D.png')}
								alt='Dungeons and Dragons application'
							/>
						</Link>
					</Card>
							</div>
			
					<div className='project'>
					<Card>
						<Card.Title>Quiz game based on GOT.</Card.Title>
						<Link to={'/GameOfThrones'}>
							<Card.Img
								src={require('./images/game-of-thrones.png')}
								alt='game of thrones quiz'
							/>
						</Link>
					</Card>
							</div>
				</div>
					</div>



		
			</div>
		);
	}
}

export default Projects;