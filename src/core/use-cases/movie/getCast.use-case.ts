import {HttpAdapter} from '../../../config/adapters/http/http.adaptar';
import {MovieCastDBResponse} from '../../../infrasctructure/interfaces/movie-db-responses';
import {CastMapper} from '../../../infrasctructure/mappers/cast.mappers';
import {Cast} from '../../models/cast.models';

export const getMovieCast = async (
  fetcher: HttpAdapter,
  movieId: number | string,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieCastDBResponse>(`${movieId}/credits`);

    const actors = cast.map(actor =>
      CastMapper.fromCastDBResultToEntity(actor),
    );

    return actors;
  } catch (error) {
    throw new Error('Movie cast error');
  }
};
