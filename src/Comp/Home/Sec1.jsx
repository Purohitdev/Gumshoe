import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Sec1() {


  useGSAP(() => {
    const ts1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Sec1",
        start: "top 0",
        end: "bottom",
        scrub: 4,
        pin:true,

      }
    })

    ts1.from(".top-sec2 span , .top-sec2 h1", {
      x:-30,
      opacity:0,
      duration:1,
      stagger:0.3,
      
      })


      ts1.to(".sec1-right .box",{
        delay:-2,
        transform:"translatex(-320%)",
  
      })

  })


  
  return (
    <>  
    <div className="Sec1">
        <div className="main-sec1">
            <div className="sec1-left " >
            <h6>Projects</h6>
            <h1>Selected work</h1>
            <p>Our unique approach to creativity means that the worlds we build transcend the media they inhabit.</p>
            

            </div>
            <div className="sec1-right">


              
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
     
            

            </div>

        </div>

    </div>
    </>
  )
}

export default Sec1