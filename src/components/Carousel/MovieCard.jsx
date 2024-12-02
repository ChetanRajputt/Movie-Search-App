import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const MovieCard = ({ movie }) => {
    const { poster_path, title, year, vote_average, overview } = movie;

    const [expandedMovieId, setExpandedMovieId] = React.useState(null);

    const toggleDescription = (movieId) => {
        setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
      };

    return (
      <Link to={`/movie-details/${movie.id}`}>
        <div className="min-w-[300px]  max-w-[300px] overflow-hidden m-2 p-3 bg-black hover:shadow-2xl hover:bg-indigo-400 duration-300 cursor-pointer border border-gray-300 rounded shadow-md">

            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={movie.title}
                className="w-full h-[300px] object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-bold text-center">{title}</h3>
            <p className="text-xl text-center">{year}</p>
            <p className="text-xl text-center text-yellow-400 ">Rating: {vote_average}</p>
            {expandedMovieId === movie.id ? (
              <p>{movie.overview}</p>
            ) : (
              <p>{movie.overview.substring(0, 150)}...</p>
            )}
            <button onClick={() => toggleDescription(movie.id)} className='read-more'>
              {expandedMovieId === movie.id ? 'Show Less' : 'Read More'}
            </button>

        </div>
        </Link>
    );
};

export default MovieCard;
