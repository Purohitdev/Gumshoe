import React from 'react'
import Hero from './Hero'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Footer from './Footer'


function Home() {
  return (
    <div className="home">
      <Hero />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Footer />

    </div>



  )
}

export default Home