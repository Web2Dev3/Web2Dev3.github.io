import React from 'react';
 
const MovieDetail = (props) => {
	const {currentMovie} = props;

const mystyle = {
      color: "white",
      backgroundColor: "rebeccapurple",
      padding: "10px",
      fontFamily: "Arial",
     textAlign: "center"
    };

return (
<div style={mystyle}>
	<h1>{currentMovie.title}</h1>
	<img src={currentMovie.posterUrl} alt={currentMovie.title}/>
	<p>{currentMovie.rating}</p>
	<p>{currentMovie.director}</p>
	<p>{currentMovie.releaseYear}</p>
	<p>{currentMovie.description}</p>
	<p>{currentMovie.categories.join(', ')}</p>
	</div>
);

};


export default MovieDetail;