import {HttpAdapter} from '../../../config/adapters/http/http.adaptar';
import {UpcomingMovieResponse} from '../../../infrasctructure/interfaces/upcoming-movie-db-response';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {UpcommingMovie} from '../../models/movie.models';

export const upcomingMoviesUseCase = async (
  fetcher: HttpAdapter,
): Promise<UpcommingMovie[]> => {
  try {
    const resp = await fetcher.get<UpcomingMovieResponse>('/upcoming');

    return resp.results.map(upcoming =>
      MovieMapper.fromUpcomingMovieDBResultToEntity(upcoming),
    );
  } catch (error) {
    throw new Error('Error in upcoming movies');
  }
};
