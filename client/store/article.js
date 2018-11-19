import axios from 'axios'

/*
  CONSTANTS
*/

const CREATE_ARTICLE = 'CREATE_ARTICLE'

/*
  ACTION CREATORS
*/

const createArticleAction = article => {
  return {
    type: CREATE_ARTICLE,
    article,
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
        return dispatch(createArticleAction(res.data))
      })
      .catch(err => console.error(err.message))
  }
}

/*
  REDUCER AND STATE OBJECT
*/

const articleState = {
  currentArticle: {},
}

export default function reducer(state = articleState, action) {
  switch (action.type) {
    case CREATE_ARTICLE:
      return { ...state, currentArticle: action.article }
    default:
      return state
  }
}
