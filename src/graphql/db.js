import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

/**
 * GET TRENDING MOVIES
 * accepts time_window, media_type to return data
 * @param {string} time_window possible options - week or day
 * @param {string} media_type possible options - movie, tv, person, all
 */
export const GET_TREND_MOVIES = async (
  time_window = "week",
  media_type = "movie"
) => {
  try {
    const {
      data: {
        results: { movies }
      }
    } = await axios.get(
      `${BASE_URL}/trending/${media_type}/${time_window}?api_key=${
        process.env.THEMOVIEDB_API_KEY
      }&language=en-US&page=1&region=us`
    );
  } catch (err) {
    Promise.reject(err);
  }
  return movies;
};

/**
 * GET NOW PLAYING MOVIES
 * Get now playing movies in USA
 */
export const GET_NOWPLAYING_MOVIES = async () => {
  try {
    const {
      data: { results }
    } = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${
        process.env.THEMOVIEDB_API_KEY
      }&language=en-US&page=1&region=us`
    );
  } catch (err) {
    Promise.reject(err);
  }
  return results;
};

export const GET_UPCOMING_MOVIES = async () => {
  try {
    const {
      data: {
        results: { movies }
      }
    } = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${
        process.env.THEMOVIEDB_API_KEY
      }&language=en-US&page=1&region=us`
    );
  } catch (err) {
    Promise.reject(err);
  }

  return movies;
};
