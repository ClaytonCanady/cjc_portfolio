import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import myResume from './CJCresume.pdf';

class Resume extends Component {
	render() {
		return (
			<div>
				<br/>
				<br/>
			<div className='resume'>
			<div className='typed_resume'>
			<h3>Full Stack Developer</h3>
			<p>Highly self motivated software engineer that likes to learn new processes and 
technologies. Creating efficient and robust applications has developed into a 
passion. I’m looking to start my professional career as a software engineer in front 
end or full stack development. 
</p>
<h4>Relevant Experience</h4>
<p>General Assembly - Software Immersive Fellow</p>
<ul>
	<li>Over four hundred hours of immersive coding experience.</li>
	<li>Built applications solo and with a team.
	</li>
	<li>Focus on learning and practicing industry standards.
	
</li>
</ul>
<h4>Education</h4>
<p>Austin Community College, TX - Associates Computer Programming Software Testing Specialization -- Graduating 2023</p>
<p>General Assembly - Software Immersive -- Fellow Completed 2020</p>
<p>Cape Fear Community College, N.C - Welding Tech and
Automotive Restoration -- Completed 2019
</p>
<h4>Other Experience</h4>
<p>US Army, Fort Benning, GA - Infantry Team Leader</p>
<ul>
	<li>Managed a team of three in rapidly changing scenarios.</li>
	<li>
	Trained incoming personnel in standard operating procedures.

	</li>
</ul>
</div>

			</div>
			<div className='download_button'>
				<a href={myResume} download='./CJCresume.pdf'>
					<Button className='my-3'>Download PDF</Button>
				</a>
				</div>
			</div>
		);
	}
}

export default Resume;
