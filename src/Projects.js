import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
			<div className='projects_container'>

<br />
				<h3>My Previous Projects</h3>
				
				<div className='projects_container'>
					

						<div className='project'>
							<div className='projectimg'>
							<img
								src={require('./images/meatlaptop.png')}
								alt='application for bbq recipes'
							/>
							
							</div>
						<p>	Meat Master is an application for the storage and viewing of barbecue
					recipes. This product includes user authorization which is the feature
					I am most proud of given the short time frame for the project. Test
					credentials for the site are Username: testcreds Password: password123 <br/>	<a href='https://meat-master-front.herokuapp.com/' target='blank'>
					Deployed Application
				</a>
				<br />
				<a
					href='https://github.com/ClaytonCanady/meat-master-frontend'
					target='blank'>
					Github Repo Front-End
				</a>
				<br />
				<a
					href='https://github.com/ClaytonCanady/meat-master-backend'
					target='blank'>
					Github Repo Back-End
				</a></p>
						</div>
				




						<div className='project'>
							<div className='projectimg'>
							<img
								src={require('./images/fleetlaptop.png')}
								alt='application for bbq recipes'
							/>
							
							</div>
						<p>	Fleet Vehicle management is a project I collaborated with three other
					engineers on. It is an application for companies to keep track of
					their fleet of vehicles and when they need to be serviced. Test
					credentials for the site are Email: testcreds@gmail.com Password:
					password123 <br/>	<a href='https://warm-brook-93750-dev.herokuapp.com/' target='blank'>
					Deployed Application
				</a>
				<br />
				<a
					href='https://github.com/SEIR622-Cass-theCassettes/fleet-frontend'
					target='blank'>
					Github Repo Front-End
				</a>
				<br />
				<a
					href='https://github.com/SEIR622-Cass-theCassettes/fleet-backend'
					target='blank'>
					Github Repo Back-End
				</a></p>
						</div>


						<div className='project'>
					
					<div className='projectimg'>
							<img
								src={require('./images/dndlaptop.png')}
								alt='game of thrones quiz'
							/>
					
					</div>
					
					<p>
					Dungeons and Dragons has always been a subject of interest to me. I
					wanted to create an application for the finding and viewing of spells
					and other properties in the game. The most challenging and also the
					component that I am most proud of is the filterable search, this makes it much easier to find a specific spell versus reading
					through the alphabetized list. 
					<br/> 	<a
					href='https://dungeons-and-dragons-info.herokuapp.com/'
					target='blank'>
					Deployed Application
				</a>
				<br />
				<a
					href='https://github.com/ClaytonCanady/dungeons-and-dragons-app'
					target='blank'>
					Github Repo
				</a>
				</p>
				
							</div>
			





					<div className='project'>
					
					<div className='projectimg'>
							<img
								src={require('./images/gotlaptop.png')}
								alt='game of thrones quiz'
							/>
					
					</div>

					<p>
					A quiz game based on
					the hit series and show Game of Thrones.
					The component that I am most proud of is the high score keeping. Questions are stored in an array of objects along with the
					answer choices, correct answer, and the correction that will be
					displayed at the end if missed. I wrote functions for
					handling the users answer, displaying results, and resetting the quiz.
					<br/> 	<a
					href='https://claytoncanady.github.io/Game-of-Thrones-Quiz/'
					target='blank'>
					Deployed Application
				</a>
				<br />
				<a
					href='https://github.com/ClaytonCanady/Game-of-Thrones-Quiz'
					target='blank'>
					Github Repo
				</a>
				</p>
				</div>
							
				
					</div>



		
			</div>
		);
	}
}

export default Projects;