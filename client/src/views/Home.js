import React from 'react'
import Navbar from '../components/Navbar'
import Snowflakes from '../components/Snowflakes'
import Jumbotron from '../components/Jumbotron'
import Wedding from '../components/Wedding'
import Gallery from '../components/Gallery'
import Congratulations from '../components/Congratulations'
import Invitaion from '../components/Invitaion'
import Maps from '../components/Maps'


function Home () {
  return (
    <>
      <Navbar />
      {/* <Snowflakes /> */}
      <Jumbotron />
      <Wedding />
      <Invitaion />
      <Gallery />
      <Congratulations />
      <Maps />
    </>
  )
}

export default Home
