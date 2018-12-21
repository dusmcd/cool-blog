import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Landing from './landing'
import {
  SignUp,
  Login,
  About,
  NewArticle,
  Article,
  NotFound,
  AdminDashboard,
} from './components'
import { connect } from 'react-redux'
import { getUserThunk } from './store'

class Routes extends React.Component {
  componentDidMount() {
    this.props.getUser()
  }
  componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      this.props.getUser()
    }
  }
  render() {
    // const isLoggedIn = !!this.props.user.id
    const isAdmin = this.props.user.admin
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        {isAdmin && <Route path="/articles/new" component={NewArticle} />}
        {isAdmin && <Route path="/admin" component={AdminDashboard} />}
        <Route path="/articles/view/:id" component={Article} />
        <Route path="/" component={NotFound} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    user: state.user.user,
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getUserThunk()),
  }
}

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
)
