import { mask } from '../helpers'

const API_KEY = '7ff9651aec389cba32ebbfccc4cdebc4';
const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

const normalizedObject = (movies) => {
  const data = {
    page: movies.page,
    totalPages: movies.total_pages,
    data: movies.results.map(
    ({
      id,
      title,
      poster_path,
      backdrop_path,
      vote_average,
      vote_count,
      overview,
      release_date,
      genre_ids
    }) => ({
      id: String(id),
      title: title,
      posterPath: poster_path,
      backdropPath: backdrop_path,
      rating: vote_average,
      voteCount: vote_count,
      description: overview,
      releaseDate: mask.date(release_date),
      genres: genre_ids.map((genre) => genres[genre]),
  }))}
  return data
};

const normalizedDetailsObject = (movies) => {
  const data = {
      id: String(movies.id),
      backdropPath: movies.backdrop_path,
      budget: mask.money(movies.budget),
      genres: movies.genres.map((genre) => genre.name),
      originalLanguage: movies.original_language,
      title: movies.title,
      description: movies.overview,
      popularity: movies.popularity,
      productionCompanies: movies.production_companies,
      releaseDate: mask.date(movies.release_date),
      revenue: mask.money(movies.revenue),
      runtime: mask.time(movies.runtime),
      tagline: movies.tagline,
      rating: movies.vote_average,
      voteCount: movies.vote_count,
  }
  return data
};

export const getMovies = async () => {

  const fetchData = 
    await fetch(API_URL)
      .then((resp) => { 
        if(!resp.ok) {
          throw Error(resp.status + ' - could not fetch the data!')
        }
        return resp.json()
      }).catch(err => {
        console.log(err.message)
        return err
      })
  const movies = normalizedObject(fetchData);

  return movies;
};

export const getMoreMovies = async (page) => {
  const fetchData = await fetch(`${API_URL}&page=${page}`).then((resp) => resp.json());
  const movies = normalizedObject(fetchData);

  return movies;
};

export const getMovieDetails = async (id) => {
  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const fetchData = await fetch(DETAIL_URL).then((resp) => resp.json());

  const movieDetails = normalizedDetailsObject(fetchData);

  return movieDetails;

}