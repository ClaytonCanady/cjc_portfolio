import React, { Component } from 'react';

class GameOfThrones extends Component {
	render() {
		return (
			<div className='single-project'>
				<h3>Game of Thrones Quiz</h3>
				<h4>Description</h4>
				<p>
					This project was my very first undertaking. It is a quiz game based on
					the hit series and show Game of Thrones. The most challenging and also
					the component that I am most proud of is the high score keeping
					capability. Questions are stored in an array of objects along with the
					answer choices, correct answer, and the correction that will be
					displayed at the end for all missed. I had to write funtions for
					handling the users answer, displaying results, resetting the quiz, and
					starting.
				</p>
				<a
					href='https://claytoncanady.github.io/Game-of-Thrones-Quiz/'
					target='blank'>
					Deployed Site
				</a>
				<br />
				<a
					href='https://github.com/ClaytonCanady/Game-of-Thrones-Quiz'
					target='blank'>
					Github Repo
				</a>
				<h4>Time Frame</h4>
				<p>This project was a solo build over the course of a week.</p>
				<ul>
					<h4>Features</h4>
					<li>1: High-score tracking via local storage.</li>
					<li>
						2: Display correct answers to any missed questions at the end.
					</li>
					<li>
						3: Restart button at the end of quiz that starts over form the first
						question.
					</li>
					<li>
						4: Displays a quote from the series based on percentage of correct
						answers.
					</li>
				</ul>
				<ul>
					<h4>Tech-Stack</h4>
					<li>Html</li>
					<li>Css</li>
					<li>Vanilla Javascript</li>
				</ul>
			</div>
		);
	}
}

export default GameOfThrones;
