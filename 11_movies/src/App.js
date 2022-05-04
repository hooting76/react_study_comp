import React from 'react';
import './App.css';
import Movie from './components/Movie';
import {useState} from'react';
import MovieForm from './components/MovieForm';

function App() {

  const [movies, setMovies]= useState([
      {id: 1, title: '바람과 함께 사라지다.', year:1939}, 
      {id: 2, title: '어벤져스', year:2012},
      {id: 3, title: '인샙션', year:2010},
    ]);

  const removeMovie = (id) =>{
    setMovies(movies.filter(movie =>{
      return movie.id !== id;;
    }))
  }  
  const renderMovies = movies.map((movie) => {
    return(
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
    )
  });
  const addMovie = (movie) =>{
    setMovies([
      ...movies,
      movie
    ]);
  }

  return (
    <div className="App">
      <h1>영화 리스트</h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
    </div>
  );
}

export default App;
