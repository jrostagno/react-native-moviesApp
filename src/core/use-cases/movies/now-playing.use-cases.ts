import {HttpAdapter} from '../../../config/adapters/http/http.adaptar';
import {NowPLayingResponse} from '../../../infrasctructure/interfaces/movie-db-responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {Movie} from '../../models/movie.models';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPLaying = await fetcher.get<NowPLayingResponse>('/now_playing');

    return nowPLaying.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};
