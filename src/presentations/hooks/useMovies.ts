import {useEffect, useState} from 'react';
import {Movie} from '../../core/models/movie.models';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDBAdapter';

let pageNumber = 1;

const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMoviesPromise =
      UseCases.moviesNowPlayingUseCase(movieDBFetcher);

    const upcomingMoviesPromise =
      UseCases.upcomingMoviesUseCase(movieDBFetcher);

    const topRatedMoviesPromise = UseCases.topRatedMovies(movieDBFetcher);

    const popularMoviesPromise = UseCases.popularMovies(movieDBFetcher);

    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        nowPlayingMoviesPromise,
        upcomingMoviesPromise,
        topRatedMoviesPromise,
        popularMoviesPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,

    setNextPagePopularMovie: async () => {
      pageNumber++;
      const nextPage = await UseCases.popularMovies(movieDBFetcher, {
        page: pageNumber,
      });

      setPopular(prev => [...prev, ...nextPage]);
    },
  };
};

export default useMovies;
