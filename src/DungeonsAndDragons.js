import React, { Component } from 'react';

class DungeonsAndDragons extends Component {
	render() {
		return (
			<div className='single-project'>
				<h3>D&D spellFinder</h3>
				<h4>Description</h4>
				<p>
					Dungeons and Dragons has always been a subject of interest to me. I
					wanted to create an application for the finding and viewing of spells
					and other properties in the game. The most challenging and also the
					component that I am most proud of is the filterable search inside each
					tab, this makes it much easier to find a specific spell versus reading
					through the alphabetized list. All items displayed are pulled from an
					external API and rendered in the browser as list items until they are
					clicked to show more information.
				</p>
				<h4>Time Frame</h4>
				<p>This project was a solo build over the course of two weeks.</p>
				<ul>
					<h4>Features</h4>
					<li>1: Filterable search.</li>
					<li>
						2: Over 600 spells, creatures, and in game conditions pulled from an
						external API.
					</li>
				</ul>
				<ul>
					<h4>Tech-Stack</h4>
					<li>React</li>
					<li>Css</li>
					<li>React Bootstrap</li>
					<li>React router and React Router DOM</li>
				</ul>
			</div>
		);
	}
}

export default DungeonsAndDragons;
