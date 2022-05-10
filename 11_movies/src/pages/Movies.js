import React from 'react';
import {useState} from "react";
import Movie from '../components/Movie';
import MovieForm from '../components/MovieForm';

const Movies = () => {
        const [movies, setMovies]= useState([
            
          ]);
      
        const removeMovie = (id) =>{
          setMovies(movies.filter(movie =>{
            return movie.id !== id;;
          }))
        }  
        const renderMovies =movies.length ? movies.map((movie) => {
          return(
            <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
          )
        }) : '추가된 영화가 없습니다. 영화를 추가해 주세요.';
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
};

export default Movies;