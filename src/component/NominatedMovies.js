import React from "react";

const NominatedMovies = ({ onDelete, moviesNominated }) => {
  return (
    <div>
      <article className="card">
        <h3>Nominated Movies Result</h3>
        {moviesNominated && moviesNominated.length >= 1 ? (
          moviesNominated.map((movie, idx) => {
            return (
              <div key={idx} className="movie">
                <div className="movie_title">
                  {movie.Title ? movie.Title + " " + movie.Year : movie.Error}
                </div>
                <button onClick={onDelete.bind(this, movie)}>Remove</button>
              </div>
            );
          })
        ) : (
          <div>No movies nominated yet</div>
        )}
      </article>
    </div>
  );
};

export default NominatedMovies;
