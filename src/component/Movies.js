import React from "react";

const Movies = ({ movies, search, addMovie, disable_button }) => {
  return (
    <div>
      <article className="card">
        <h3>Result for {search}</h3>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} className="movie">
              <div className="movie_title">
                {movie.Title ? movie.Title + " " + movie.Year : movie.Error}
              </div>
              <button
                onClick={addMovie.bind(this, movie)}
                className={
                  !movie.Title || movie.isDisabled ? "not_valid" : "valid"
                }
              >
                Nominate
              </button>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Movies;
