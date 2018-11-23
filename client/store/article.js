import axios from 'axios'

/*
  CONSTANTS
*/

const SELECT_ARTICLE = 'SELECT_ARTICLE'
const GET_ARTICLES = 'GET_ARTICLES'
const ADD_COMMENT = 'ADD_COMMENT'

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

const addCommentAction = comment => {
  return {
    type: ADD_COMMENT,
    comment,
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
        dispatch(selectArticleAction(res.data))
        return res.data
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

export const addCommentThunk = (comment, articleId) => {
  return dispatch => {
    return axios
      .post(`/api/articles/${articleId}/comment`, comment)
      .then(res => {
        dispatch(addCommentAction(res.data))
        return res.data
      })
      .catch(err => console.error(err))
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
    case ADD_COMMENT:
      const updatedComments = [...state.currentArticle.comments, action.comment]
      const updatedArticle = {
        ...state.currentArticle,
        comments: updatedComments,
      }
      return { ...state, currentArticle: updatedArticle }
    default:
      return state
  }
}
