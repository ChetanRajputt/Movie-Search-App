import { useParams } from "react-router-dom";
import ReactStars from 'react-stars';
import { useState, useEffect } from "react";
import axios from 'axios'; 

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true); 

  const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Zjg0NzhmZDMwN2QzODAzMTI1ZTE3ZDQ3ZGU0OTE4YSIsIm5iZiI6MTY5NDAwMzQyMC4xNTM5OTk4LCJzdWIiOiI2NGY4NzBkY2ZmYzlkZTAxMWJlOTZiMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dUuJomoF5ZhUIuslynhP28B_OvkJ7GQDRHx4oAsX3vw";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });
        setMovie(response.data);
        setLoading(false);

        // Fetch additional data: cast, trailers, and reviews
        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const {
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    overview,
    budget,
    revenue,
    runtime,
    tagline,
    production_companies,
  } = movie;

  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 shadow-2xl md:flex-row md:items-start gap-x-12 md:mt-8 md:mb-4 detail">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="md:w-[300px] h-[480px] rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center w-full mt-2 md:w-1/2 md:mt-0">
        <div className="flex flex-col items-center justify-center mt-3 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-200 md:text-5xl f-4">{title}</h1>
          <ReactStars count={10} value={vote_average} edit={false} size={40} />
        </div>
        <div className="mx-8 md:mx-0">
          <p className="p-2 text-2xl text-gray-500 md:text-xl f-1">
            {genres.map((genre) => genre.name).join(", ")} | <span>{release_date.split("-")[0]}</span>
          </p>
          <p className="text-xl text-gray-300 f-2">{overview}</p>

          <div className="mt-4 text-gray-500">
            <p><strong>Budget:</strong> ${budget.toLocaleString()}</p>
            <p><strong>Revenue:</strong> ${revenue.toLocaleString()}</p>
            <p><strong>Runtime:</strong> {runtime} minutes</p>
            <p><strong>Tagline:</strong> {tagline}</p>

            <div className="mt-4">
              <strong>Production Companies:</strong>
              <ul className="ml-6 list-disc">
                {production_companies.map((company) => (
                  <li key={company.id}>
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} 
                      alt={company.name} 
                      className="inline-block w-12 h-12 mr-2"
                    />
                    {company.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cast Members */}
          <div className="mt-8">
            <strong>Cast:</strong>
            <div className="flex flex-wrap gap-4 mt-4">
              {cast.slice(0, 5).map((member) => (
                <div key={member.cast_id} className="text-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                    alt={member.name}
                    className="w-32 h-48 mb-2 rounded-lg"
                  />
                  <p className="text-sm text-gray-400">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
