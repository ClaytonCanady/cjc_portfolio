import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
					<div>
						<img className='resume'
							src={require('./images/CJCresume.png')}
							alt='my resume'
						/>
					</div>
				);
    }
}

export default Resume;