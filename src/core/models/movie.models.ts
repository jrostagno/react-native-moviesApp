export interface Movie {
  id: string | number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  posters: string;
  backdrop: string;
}

export interface FullMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompany: string[];
}

export interface UpcommingMovie {
  id: string | number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  posters: string;
  backdrop: string;
}
