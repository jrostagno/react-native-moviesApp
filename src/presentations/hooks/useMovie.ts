/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {FullMovie} from '../../core/models/movie.models';
import {getMovieById} from '../../core/use-cases/movie/movieById.use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDBAdapter';
import {getMovieCast} from '../../core/use-cases/movie/getCast.use-case';
import {Cast} from '../../core/models/cast.models';

export const useMovie = (movieId: number | string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<FullMovie>();
  const [castMovie, setCastMovie] = useState<Cast[]>([]);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const movieResponsePromise = getMovieById(movieDBFetcher, movieId);
    const castResponsePromise = getMovieCast(movieDBFetcher, movieId);

    const [movieReesponse, castResponse] = await Promise.all([
      movieResponsePromise,
      castResponsePromise,
    ]);
    setMovie(movieReesponse);
    setCastMovie(castResponse);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    castMovie,
  };
};
