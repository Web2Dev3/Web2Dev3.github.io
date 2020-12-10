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

 const [opinion, setOpinion] = React.useState(null);
return (
<div style={mystyle}>
	<h1>{currentMovie.title}</h1>
	<img style={{width:'80%'}} src={currentMovie.posterUrl} alt={currentMovie.title}/>
	<p>{currentMovie.rating}</p>
	<p>{currentMovie.director}</p>
	<p>{currentMovie.releaseYear}</p>
	<p>{currentMovie.description}</p>
	<p>{currentMovie.categories.join(', ')}</p>
 <p>Did you like this Movie?</p>
<p>{opinion}</p>
   <Button buttonText={'Yes'} onClickFunction={() => setOpinion('Yes')}/>
     <Button buttonText={'No'} onClickFunction={() => setOpinion('No')}/>
	</div>
);

};


export default MovieDetail;
