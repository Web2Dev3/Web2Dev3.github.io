import React from 'react';

const Button = (props) => {
	const {buttonText, onClickFunction} = props;
	return (
		  <button style={{color: 'pink', backgroundColor: 'maroon'}} onClick={onClickFunction}>{buttonText}</button>
	);
};

const string = 'hi';

export {Button, string};