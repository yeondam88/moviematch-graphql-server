import {
  getTrendMovies,
  getNowPlaying,
  getupcomingMovies,
  getMovieRecommendation,
  getMovieDetail,
  getPopularMovies,
  getTopRatedMovies,
  searchMovies
} from "./db";

const resolvers = {
  Query: {
    trendMovies: (_, { media_type, time_window }) =>
      getTrendMovies(media_type, time_window),
    nowPlayingMovies: () => getNowPlaying(),
    upcomingMovies: () => getupcomingMovies(),
    movieRecommendations: (_, { id }) => getMovieRecommendation(id),
    movieDetail: (_, { id }) => getMovieDetail(id),
    popularMovies: () => getPopularMovies(),
    topRatedMovies: () => getTopRatedMovies(),
    search: (_, { query }) => searchMovies(query)
  }
};

export default resolvers;
