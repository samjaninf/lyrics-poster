import React from 'react';

import iconGitHub from '../../images/icons/github.svg';
import iconZoom from '../../images/icons/zoom.svg';


export default function Info() {
	return (
		<div className="info-container">
			<p className="zoom-info">
				<img src={iconZoom} alt="Next" width="18px" className="zoom-icon" />
				Hover/touch on poster to zoom
			</p>
			<div className="credits-container">
				<p>
					<a
						href="https://samuelmeuli.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						Created by Samuel Meuli
					</a>
				</p>
				<p>
					<a
						href="https://github.com/samuelmeuli/lyrics-poster"
						target="_blank"
						rel="noreferrer noopener"
					>
						<img src={iconGitHub} alt="Next" width="13px" />
						Source code on GitHub
					</a>
				</p>
			</div>
		</div>
	);
}
