const API_KEY = '7ff9651aec389cba32ebbfccc4cdebc4';
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

export const getMovies = async () => {

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  const fetchData = await fetch(API_URL).then((resp) => resp.json());
  
  const movies = {
    page: fetchData.page,
    totalPages: fetchData.total_pages,
    data: fetchData.results.map(
      ({
        id,
        original_title,
        poster_path,
        backdrop_path,
        vote_average,
        vote_count,
        overview,
        release_date,
        genre_ids
      }) => ({
        key: String(id),
        title: original_title,
        posterPath: poster_path,
        backdropPath: backdrop_path,
        rating: vote_average,
        voteCount: vote_count,
        description: overview,
        releaseDate: release_date,
        genres: genre_ids.map((genre) => genres[genre]),
  
      })
    )
  }

  return movies;
};