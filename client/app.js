import React from 'react'
import Routes from './routes'
import UserNav from './user-nav'

const App = () => {
  return (
    <div id="main-content">
      <UserNav />
      <Routes />
    </div>
  )
}

export default App
