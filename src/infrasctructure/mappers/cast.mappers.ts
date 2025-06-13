import {Cast} from '../../core/models/cast.models';
import {MovieCastDB} from '../interfaces/movie-db-responses';

export class CastMapper {
  static fromCastDBResultToEntity(cast: MovieCastDB): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? 'No character',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
