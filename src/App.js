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

   const [count, setCount] = React.useState(0);
    return (
        <div>
<h1>Movie Information</h1>
	<main  style={{display: 'flex', flexDirection: 'row'}}>
        {movies.map( (movie) => {
		return (
			<MoviePreviews
			key={movie.title}
			 movie={movie} onClickFunction={setCurrentMovie}/>
		)
	}) } </main>
	{
		currentMovie ?
	<MovieDetail currentMovie={currentMovie}/>
		:
	<p>No movie selected.</p>
	}

<Paragraph text={'Hello'}/>
<Paragraph text={'This is a paragraph.'}/>
<Paragraph text={'This is another paragraph.'}/>
<Paragraph text={'Made with React.'}/>
<Button buttonText={'Greetings!'} onClickFunction={() => alert(string)}/>
 <p>{count}</p>

           <Button buttonText={'Reset'} onClickFunction={() => setCount(0)}/>
     <Button buttonText={'Click to Add'} onClickFunction={() => setCount(count + 1)}/>
     <Button buttonText={'Click to Subtract'} onClickFunction={() => setCount(count - 1)}/>
</div>
  );


}

export default App;