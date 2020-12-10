import React from 'react';

const Paragraph = (props) => {
   const {text} = props;
   return (
	<div>
	<p style={{color: 'pink', backgroundColor: 'maroon', textAlign: 'center'}}>{text}</p>
	</div>);
};

export default Paragraph;
