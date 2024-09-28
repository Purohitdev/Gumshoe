import React from 'react'
import Navb from '../Navb'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Hero() {

  useGSAP(() => {

    const t1 = gsap.timeline(
    );

    t1.from(".logo h1", {
      // x:-30,
      x:-100,
      opacity:0,
      duration:0.6,
      delay:3.2,
      
      })

      t1.from(".navi li", {
        y:30,
        opacity:0,
        duration:0.6,
        stagger:0.3,
        
        })

      // t1.from(".para p span", {
      //   y:30,
      //   stagger:1,
      //   opacity:0,
      //   duration:0.2,
      //   })


      t1.from(".para p",{
        y:20,
        stagger:1,
        opacity:0,


      })

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top 0",
        end: "bottom ",
        scrub: 2,
      }

    })

    t2.to(".logo h1", {
      fontSize: 40,


    })


    t2.from(".sec1-left h6 , .sec1-left  h1 ,.sec1-left  p ",{
      x:-100,
      opacity:0,
      stagger:0.2,


    })

  })


  return (
    <>
      <div className="hero">
        <Navb />
        <div className="para">
         <div className="ov">
         <p> Gumshoe Studios pioneers immersive storytelling in gaming , </p>
         </div>
         <div className="ov"> 
         <p>animation, merging stunning visuals </p></div>
         <div className="ov">
         <p> with engaging narratives </p>
         </div>
         <div className="ov">
         <p> for groundbreaking experiences.</p>
         </div>
        </div>


      </div>
     

    </>
  )
}

export default Hero