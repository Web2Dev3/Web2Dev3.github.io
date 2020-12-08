import React from 'react';

const Paragraph = (props) => {
   const {text} = props;
   return (
	<div>
	<p style={{color: 'pink', backgroundColor: 'maroon'}}>{text}</p>
	</div>);
};

export default Paragraph;