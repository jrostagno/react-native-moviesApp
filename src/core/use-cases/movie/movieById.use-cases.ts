import {HttpAdapter} from '../../../config/adapters/http/http.adaptar';
import {MovideByIDResponse} from '../../../infrasctructure/interfaces/movie-db-responses';
import {MovieMapper} from '../../../infrasctructure/mappers/movie.mapper';
import {FullMovie} from '../../models/movie.models';

export const getMovieById = async (
  fetcher: HttpAdapter,
  movieID: number | string,
): Promise<FullMovie> => {
  try {
    const response = await fetcher.get<MovideByIDResponse>(`/${movieID}`);

    return MovieMapper.fromMovieByIdDBResultToEntity(response);
  } catch (error) {
    throw new Error(`Error fetching -->${movieID}`);
  }
};
