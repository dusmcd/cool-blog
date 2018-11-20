import React from 'react'
import { getArticlesThunk } from '../../store'
import { connect } from 'react-redux'
import ArticleCard from './article-card'

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    const { articleList } = this.props
    if (!articleList.length) return <div>LOADING...</div>
    return articleList.map(article => (
      <ArticleCard key={article.id} article={article} />
    ))
  }
}

const mapState = state => {
  return {
    articleList: state.article.articleList,
  }
}

const mapDispatch = dispatch => {
  return {
    fetchArticles: () => dispatch(getArticlesThunk()),
  }
}

export default connect(
  mapState,
  mapDispatch
)(ArticleList)
