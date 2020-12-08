import React from 'react';

const MoviePreviews = (props) => {
	const {movie, onClickFunction} = props;
const movieStyle = {
backgroundColor: '#F2EDEB',
    height: '250px',
    width: '250px',
    margin: '10px',
    padding: '5px',
    boxShadow: '4px 4px 12px #9A8B84',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.0em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

	return (
		<button key={movie.title} style={movieStyle} onClick={() => {onClickFunction(movie)}}>
		<h4 style={{color: 'cornflowerblue'}}>{movie.title}</h4> 
		<p style={{color: 'navy'}}>{movie.rating}</p> 
		<p style={{color: 'cornflowerblue'}}>{movie.director}</p>
		<p style={{color: 'navy'}}>{movie.releaseYear}</p>  
		</button>
		)

};


export default MoviePreviews;