import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import MovieDetails from "./components/movie-details/movie-details";
import MovieList from "./components/movies-list/movie-list";
import AddMovie from "./components/add-movie/add-movie";

function fetchAll() {
  return fetch("http://localhost:3300/movies")
    .then((res) => res.json())
    .catch(() => alert("Не получается подключиться к базе данных!"));
}


const App = () => {

  
  const [movies, setMovies] = useState([]);
  const [stateMovie, setStateMovie] = useState(null);
  const [curMovie, setCurMovie] = useState(undefined);

  useEffect(() => {
    fetchAll().then((res)=> {
      setMovies(res);
    })
  }, []);
  const onSetCurrentMovie = useCallback((film) => {
    setCurMovie(film);
    setStateMovie(null);
  }, [])

  const callAddMovie = useCallback(() => {
    setStateMovie('ADD');
  }, [])

  const callEditMovie = useCallback( ()=> {
    setStateMovie('EDIT');
  }, [])

  async function editMovie(num) {
    try {
      await fetch(`http://localhost:3300/movies/${num}`, {
        method: "PATCH",
        body: JSON.stringify(curMovie),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      await fetchAll().then((res)=> {
        setMovies(res);
      });
      setStateMovie(null);
    } catch (e) {
      alert("Error in fetch!");
      console.error(e);
    }
  }

  async function addMovie(film) {
    const data = { id: movies.length + 1, ...film };
    try {
      await fetch("http://localhost:3300/movies", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })

      await fetchAll().then((res)=> {
        setMovies(res);
      });
      setCurMovie(data);
      setStateMovie(null);
    } catch (e) {
      alert("Error in fetch!");
      console.error(e);
    }
  }

  return (
    <div>
      <Header />
      <div className="main-content">
        <MovieList
          showMovie={onSetCurrentMovie}
          callAddMovie={callAddMovie}
          movies={movies}
          setMovies={setMovies}
          stateMovie={stateMovie}
        />
        {curMovie && !stateMovie ? (
          <MovieDetails
            movie={curMovie}
            callEditMovie={callEditMovie}
          />
        ) : (
          <AddMovie
            addMovie={addMovie}
            setStateMovie={setStateMovie}
            movie={curMovie}
            stateMovie={stateMovie}
            editMovie={editMovie}
            showMovie={onSetCurrentMovie}
            setCurMovie={setCurMovie}
          />
        )}
      </div>
    </div>
  );
};

export default App;
