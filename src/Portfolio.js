import React, { Component } from 'react';
import './Portfolio.css'
class Portfolio extends Component {
    render() {
        return (
					<div className='container'>
						<div className='project'>
							<img
								src={require('./images/game-of-thrones.png')}
								alt='game of thrones quiz'
							/>
							<p>A quiz game based on the hit show Game of Thrones.</p>
						</div>
						<div className='project'>
							<img
								src={require('./images/game-of-thrones.png')}
								alt='game of thrones quiz'
							/>
							<p>A quiz game based on the hit show Game of Thrones.</p>
						</div>
						<div className='project'>
							<img
								src={require('./images/game-of-thrones.png')}
								alt='game of thrones quiz'
							/>
							<p>A quiz game based on the hit show Game of Thrones.</p>
						</div>
						<div className='project'>
							<img
								src={require('./images/game-of-thrones.png')}
								alt='game of thrones quiz'
							/>
							<p>A quiz game based on the hit show Game of Thrones.</p>
						</div>
					</div>
				);
    }
}

export default Portfolio;