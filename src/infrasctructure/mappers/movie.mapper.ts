import {FullMovie, Movie, UpcommingMovie} from '../../core/models/movie.models';
import {MovideByIDResponse, Result} from '../interfaces/movie-db-responses';
import {ResultUpcomingMovie} from '../interfaces/upcoming-movie-db-response';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      posters: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromUpcomingMovieDBResultToEntity(
    result: ResultUpcomingMovie,
  ): UpcommingMovie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      posters: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromMovieByIdDBResultToEntity(result: MovideByIDResponse): FullMovie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      posters: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      genres: result.genres.map(el => el.name),
      duration: result.runtime,
      budget: result.budget,
      originalTitle: result.original_title,
      productionCompany: result.production_companies.map(
        company => company.name,
      ),
    };
  }
}
