import React from 'react';

const style = {
	textDecoration: 'underline'
}

export const Footer = () => {
	return (
		<footer className='footer blue darken-1 white-text' style={{paddingLeft: '2rem', height: '30px'}}>
			Icons made by&nbsp;
			<a href="https://www.freepik.com" title="Freepik" className='white-text' style={style}>Freepik</a>&nbsp;
			from&nbsp;
			<a href="https://www.flaticon.com/" title="Flaticon" className='white-text' style={style}>www.flaticon.com</a>
		</footer>
	);
};