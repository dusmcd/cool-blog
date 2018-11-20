import axios from 'axios'

/*
  CONSTANTS
*/

const SELECT_ARTICLE = 'SELECT_ARTICLE'
const GET_ARTICLES = 'GET_ARTICLES'

/*
  ACTION CREATORS
*/

const selectArticleAction = article => {
  return {
    type: SELECT_ARTICLE,
    article,
  }
}

const getArticlesAction = articles => {
  return {
    type: GET_ARTICLES,
    articles,
  }
}

/*
  THUNKS
*/

export const createArticleThunk = newArticle => {
  return dispatch => {
    return axios
      .post('/api/articles', newArticle)
      .then(res => {
        return dispatch(selectArticleAction(res.data))
      })
      .catch(err => console.error(err.message))
  }
}

export const getArticlesThunk = () => {
  return dispatch => {
    return axios
      .get('/api/articles')
      .then(res => dispatch(getArticlesAction(res.data)))
      .catch(err => console.error(err.message))
  }
}

export const getOneArticleThunk = id => {
  return dispatch => {
    return axios
      .get(`/api/articles/${id}`)
      .then(res => dispatch(selectArticleAction(res.data)))
      .catch(err => console.error(err.message))
  }
}

/*
  REDUCER AND STATE OBJECT
*/

const articleState = {
  currentArticle: {},
  articleList: [],
}

export default function reducer(state = articleState, action) {
  switch (action.type) {
    case SELECT_ARTICLE:
      return { ...state, currentArticle: action.article }
    case GET_ARTICLES:
      return { ...state, articleList: action.articles }
    default:
      return state
  }
}
