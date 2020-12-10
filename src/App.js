//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Paragraph from './Paragraph';
import {Button, string} from './Button';
import {movies} from './movies';
import MoviePreviews from './movies (2)';
import MovieDetail from './movieDetail';

function App() {
const [currentMovie, setCurrentMovie] = React.useState(null);
    return (
        <div style={{backgroundColor:'aliceblue'}}>
<h1 style={{textAlign:'center', color:'navy', fontWeight:'bold'}}>Movie Information</h1>
<Button buttonText={'Welcome to React!'} onClickFunction={() => alert(string)}/>
<Paragraph text={'Please Select a Movie'}/>
	<main  style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {movies.map( (movie) => {
		return (
			<MoviePreviews
			key={movie.title}
			 movie={movie} onClickFunction={setCurrentMovie}/>
		)
	}) } </main>
	 <Button buttonText={'Close Movie'} onClickFunction={() => setCurrentMovie(null)}/>
	{
		currentMovie ?
	<MovieDetail currentMovie={currentMovie}/>
		:
	<p style={{textAlign:'center', color:'navy', fontWeight:'bold'}}>No movie selected.</p>
	}

</div>
  );

}
export default App;
