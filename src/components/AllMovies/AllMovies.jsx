import React, { useEffect, useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Carousel from '../Carousel/Carousel';
import Container from '../Container/Container';
import axios from 'axios';
import MovieCard from '../Carousel/MovieCard';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('popularity.desc');
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');


    // bearer token 
    const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Zjg0NzhmZDMwN2QzODAzMTI1ZTE3ZDQ3ZGU0OTE4YSIsIm5iZiI6MTY5NDAwMzQyMC4xNTM5OTk4LCJzdWIiOiI2NGY4NzBkY2ZmYzlkZTAxMWJlOTZiMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dUuJomoF5ZhUIuslynhP28B_OvkJ7GQDRHx4oAsX3vw";

    // fetch genres
    useEffect(() => {
        const fetchGenres = async () => {
            const response = await axios.get(
                'https://api.themoviedb.org/3/genre/movie/list',
                {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                    }
                });
            setGenres(response.data.genres);
        };
        fetchGenres();
    }, []);


    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                    },
                    params: {
                        sort_by: sortBy,
                        page: 1,
                        with_genres: selectedGenre,
                        query: searchQuery,
                    },
                }
            );
            setMovies(response.data.results);
        };
        fetchMovies();
    }, [searchQuery, sortBy, selectedGenre]);



    const handleSearchMovies = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                params: {
                    query: searchQuery,
                },
            });

            setMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <Container>
                <SearchBox
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearchMovies={handleSearchMovies}

                />
                {/* Filter Section */}
                <div className="flex flex-col justify-between p-4 text-black rounded-lg shadow-md md:flex-row">
                    <h2 className="mb-4 text-lg font-semibold text-white">Filter Movies</h2>

                    <div className="flex flex-col mb-4 md:flex-row md:items-center md:gap-4">
                        <label
                            htmlFor="sort-by"
                            className="block text-sm font-medium text-white md:mb-0"
                        >
                            Sort By:
                        </label>
                        <select
                            id="sort-by"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-auto focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="popularity.desc">Popularity Descending</option>
                            <option value="popularity.asc">Popularity Ascending</option>
                            <option value="vote_average.desc">Rating Descending</option>
                            <option value="vote_average.asc">Rating Ascending</option>
                            <option value="release_date.desc">Release Date Descending</option>
                            <option value="release_date.asc">Release Date Ascending</option>
                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                        <label
                            htmlFor="genre"
                            className="block text-sm font-medium md:mb-0"
                        >
                            Genre:
                        </label>
                        <select
                            id="genre"
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-auto focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value="">All Genres</option>
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>


                {movies && movies.length > 0 ? (
                    <div
                        id="content"
                        className="relative flex flex-wrap items-center justify-center gap-8 p-4 mt-8 md:justify-start scroll-smooth"
                    >
                        {movies && movies.map((movie, index) => (
                            <MovieCard
                                key={index}
                                movie={movie}
                            />
                        ))}
                    </div>

                ) : (
                    <p className="mt-4 text-center text-gray-500">No movies found. Try searching!</p>
                )}
            </Container>
        </div>
    );
};

export default AllMovies;
