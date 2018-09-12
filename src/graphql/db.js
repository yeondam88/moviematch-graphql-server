import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

/**
 * GET TRENDING MOVIES
 * accepts time_window, media_type to return data
 * @param {string} time_window possible options - week or day
 * @param {string} media_type possible options - movie, tv, person, all
 */
export const getTrendMovies = async (
  media_type = "movie",
  time_window = "week"
) => {
  try {
    const {
      data: { results }
    } = await axios.get(`${BASE_URL}/trending/${media_type}/${time_window}`, {
      params: { api_key: "86fce8bfeb204a7e8c71d14290ae5016" }
    });
    return results;
  } catch (err) {
    Promise.reject(err);
  }
};

/**
 * GET NOW PLAYING MOVIES
 * Get now playing movies in USA
 */
export const getNowPlaying = async () => {
  try {
    const {
      data: { results }
    } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
      params: {
        api_key: "86fce8bfeb204a7e8c71d14290ae5016",
        language: "en-US",
        region: "us",
        page: 1
      }
    });
    return results;
  } catch (err) {
    Promise.reject(err);
  }
};

/**
 * GET Upcoming movies
 */
export const getupcomingMovies = async () => {
  try {
    const {
      data: { results }
    } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
      params: {
        api_key: "86fce8bfeb204a7e8c71d14290ae5016",
        language: "en-US",
        region: "us",
        page: 1
      }
    });
    return results;
  } catch (err) {
    Promise.reject(err);
  }
};

/**
 * GET MOVIE RECOMMANDATION base on currently viewing movie
 * @param {number} id
 */
export const getMovieRecommendation = async id => {
  try {
    const {
      data: { results }
    } = await axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
      params: {
        api_key: "86fce8bfeb204a7e8c71d14290ae5016",
        language: "en-US",
        region: "us",
        page: 1
      }
    });
    return results;
  } catch (err) {
    Promise.reject(err);
  }
};

/**
 * GET POPULAR MOVIES
 */
export const getPopularMovies = async () => {
  try {
    const {
      data: { results }
    } = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: "86fce8bfeb204a7e8c71d14290ae5016",
        language: "en-US",
        region: "us"
      }
    });
    return results;
  } catch (err) {
    Promise.reject(err);
  }
};

/**
 * GET POPULAR MOVIES
 */
export const getTopRatedMovies = async () => {
  try {
    const {
      data: { results }
    } = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: "86fce8bfeb204a7e8c71d14290ae5016",
        language: "en-US",
        region: "us"
      }
    });
    return results;
  } catch (err) {
    Promise.reject(err);
  }
};

/**
 * SEARCH MOVIES by ID
 * @param {string} query
 */
export const searchMovies = async query => {
  try {
    const {
      data: { results }
    } = await axios.get(`${BASE_URL}/search/movie/`, {
      params: {
        api_key: "86fce8bfeb204a7e8c71d14290ae5016",
        language: "en-US",
        query,
        region: "us",
        page: 1
      }
    });
    return results;
  } catch (err) {
    Promise.reject(err);
  }
};

/**
 * GET MOVIE DETAIL by ID
 * @param {number} id
 */
export const getMovieDetail = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: "86fce8bfeb204a7e8c71d14290ae5016", language: "en-US" }
    });
    return data;
  } catch (err) {
    Promise.reject(err);
  }
};
