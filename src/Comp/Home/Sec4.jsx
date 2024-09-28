import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(SplitText);



function Sec4() {

  const text = "gumshoe";


  useGSAP(() => {
    const ts5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Sec4",
        start: "top 40%",
        end: "bottom 100%",
        scrub: 2,
        // markers: true,

      }
    })





    ts5.from( ".Sec4 h1 ", {
      y:80,
      opacity: 0,
      stagger: 2,
      scrub: 5,
      duration:10,

    })  



    const ts6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 3,

      }
    })



    ts6.from(".foot1 p",{
      x:20,
      opacity:0,     
      delay:2,
    })

    ts6.from(".try li",{
      x:20,
      opacity:0,     
      stagger:0.2
    })




  })



  return (
    <div className="Sec4">
      {/* <h1 id="quote">
        {text.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1> */}

      <h1>G</h1>
      <h1>U</h1>
      <h1>M</h1>
      <h1>S</h1>
      <h1>H</h1>
      <h1>0</h1>
      <h1>E</h1>

    </div>
  )
}

export default Sec4