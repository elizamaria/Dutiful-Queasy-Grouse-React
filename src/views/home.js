import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dutiful Queasy Grouse</title>
        <meta property="og:title" content="Dutiful Queasy Grouse" />
      </Helmet>
      <div className="home-container1"></div>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
      <button className="button">Button</button>
    </div>
  )
}

export default Home
