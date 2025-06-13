import {HttpAdapter} from '../../../config/adapters/http/http.adaptar';
import {PopularMoviesResponse} from '../../../infrasctructure/interfaces/populat-db-responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.models';

interface Options {
  page?: number;
  limit?: number;
}

export const popularMovies = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const response = await fetcher.get<PopularMoviesResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return response.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching popular');
  }
};
