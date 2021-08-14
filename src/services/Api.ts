import axios from 'axios'

const Api = axios.create({
  baseURL: process.env.REACT_APP_TMDB_URL,
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
})

export default Api
