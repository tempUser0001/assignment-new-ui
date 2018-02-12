/**
 * ## api
 * calls iTunes using axios
 */
import axios from "axios";
/**
 * ## searchApi
 * @method
 * search iTunes API call
 */
export const searchApi = async searchString =>
  axios
    .get(`https://itunes.apple.com/search?term=${searchString}&limit=200`)
    .then(res => Promise.resolve(res.data.results))
    .catch(err => Promise.reject(err));

/**
 * ## albumApi
 * @method
 * get album details API call
 */
export const albumApi = async collectionId =>
  axios
    .get(`https://itunes.apple.com/lookup?id=${collectionId}&entity=song`)
    .then(res => Promise.resolve(res.data.results))
    .catch(err => Promise.reject(err));
