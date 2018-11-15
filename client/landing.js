import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Landing = () => {
  return (
    <div className="landing-banner">
      <h1>Past time paradise</h1>
      <h3>Welcome to my blog</h3>
      <h4>Read it... or not</h4>
      <Button secondary>
        <Link className="links" to="/about">
          About
        </Link>
      </Button>
    </div>
  )
}

export default Landing
