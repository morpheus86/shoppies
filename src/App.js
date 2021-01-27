import "./App.css";
import { useState, useEffect } from "react";
import Movies from "./component/Movies";
import NominatedMovies from "./component/NominatedMovies";

function App() {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [resultingMovies, setResultingMovies] = useState([]);
  const [nominate, setNominate] = useState([]);

  const addMovieButtonController = (movie) => {
    return {
      ...movie,
      isDisabled: false,
    };
  };

  const addNomination = (nomination) => {
    nomination.isDisabled = true;
    setNominate((currentNomination) => {
      let result = [...currentNomination, nomination];
      let obj1 = {};
      for (let m of result) {
        if (!obj1[m.Title + m.Year]) {
          obj1[m.Title + m.Year] = m;
        }
      }
      result = Object.values(obj1);
      return result;
    });
  };
  const onRemove = (nomination) => {
    nomination.isDisabled = false;
    setNominate((currentNomination) => {
      return currentNomination.filter((el) => el.Title !== nomination.Title);
    });
  };
  useEffect(() => {
    const onType = async () => {
      let movies;
      if (searchMovieTitle.length > 0) {
        const response = await fetch(
          `https://www.omdbapi.com/?t=${searchMovieTitle}&apikey=9352fafd`
        );
        movies = await response.json();
        let updatedMovie = addMovieButtonController(movies);
        nominate.filter((m) => {
          if (m.Title + m.Year === updatedMovie.Title + updatedMovie.Year) {
            updatedMovie.isDisabled = true;
          }
          return updatedMovie;
        });
        setResultingMovies([...resultingMovies, updatedMovie]);
      } else {
        setResultingMovies([]);
      }
    };
    onType();
  }, [searchMovieTitle]);

  return (
    <div>
      <section id="home_container">
        {nominate.length < 5 ? (
          <div className="container">
            <header className="header">Welcome To The Shoppies</header>
            <form />
            <div className="search_box">
              <label htmlFor="Movie Title">Movie Title</label>
              <input
                type="search"
                placeholder="Search Movies"
                onChange={(e) => {
                  setSearchMovieTitle(e.target.value);
                }}
              />
            </div>
            <div className="movies py-2">
              <Movies
                movies={resultingMovies}
                search={searchMovieTitle}
                addMovie={addNomination}
              />
              <NominatedMovies moviesNominated={nominate} onDelete={onRemove} />
            </div>
          </div>
        ) : (
          <div className="container">
            <header className="header">Welcome To The Shoppies</header>
            <div>
              <h1>Congratulation on all your Nominee</h1>
              <div className="img"></div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
