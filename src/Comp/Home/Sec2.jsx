import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Sec2() {

  useGSAP(() => {
    const ts3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Sec2",
        start: "top 0",
        end: "bottom",
        scrub: 2,

      }
    })



    ts3.fromTo(".div1 ", {
      y: 50,
    }, {
      y: 250, duration: 1
    })




  })

  return (
    <>
      <div className='top-sec2'>
        <span>ABOUT</span>
        <h1>We are gumshoe</h1>
      </div>
      <div className="Sec2">
        <div className="main-sec2">
          <div className="sec2-left">
            <div className="pic-sec2">

            </div>

          </div>
          <div className="sec2-right">
            <div className="div1">
              <p>Founded by actor Abubakar Salim, Surgent Studios is a media company that brings a pioneering philosophy to storytelling across screen, games and emerging platforms.</p>
              <p>Our captivating storyworlds are designed to be told across multiple platforms, allowing us to bring each story to life in the most compelling medium.</p>
              <p>Drawing from the social themes that shape our world, we create brave and original narratives that resonate with today’s global audience.</p>



              <button class="btn-shine">
                <span>Shine</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Sec2