import React from 'react'
import HeroSlider from './HeroSlider'

export default function Hero() {
  return (
    <section id="home" className="h-[100vh] lg:h-[912px] md:h-[912px] bg-hero bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto h-full">
        {/* slider  */}
        <HeroSlider/>
      </div>
    </section>
  )
}
