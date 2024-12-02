import React from 'react'
import TopBannerSlider from '../components/TopBannerSlider/TopBannerSlider'
import Carousel from '../components/Carousel/Carousel'
import AllMovies from '../components/AllMovies/AllMovies'

const Home = () => {
  return (
    <main>
      <TopBannerSlider/>
      <AllMovies/>
      {/* <Carousel/> */}
    </main>
  )
}

export default Home
