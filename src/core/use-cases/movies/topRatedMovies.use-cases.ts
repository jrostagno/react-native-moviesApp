import {HttpAdapter} from '../../../config/adapters/http/http.adaptar';
import {TopRatedMovieResponse} from '../../../infrasctructure/interfaces/topRated-db.responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.models';

export const topRatedMovies = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const response = await fetcher.get<TopRatedMovieResponse>('/top_rated');

    return response.results.map(movie =>
      MovieMapper.fromMovieDBResultToEntity(movie),
    );
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};
