import React, { useState, useEffect, useRef } from 'react';
import Home from "../Comp/Home/Home";
import Font from './Font';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Load = () => {
  const [loading, setLoading] = useState(true);
  const topRef = useRef(null); // Ref for .top container

  useEffect(() => {
    // Prevent scrolling when loading starts
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timeline = gsap.timeline();

      // Loader slides down and fades out
      timeline.to(".loading", {
        y: -1000,
        duration: 1.5,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          // Allow scrolling again after loader animation is done
          document.body.style.overflow = 'visible'; // Enable scrolling
          if (topRef.current) {
            topRef.current.style.overflow = 'visible'; // Allow overflow on .top if needed
          }
        },
      });

      // Home fades in while loader moves out
      timeline.to(".home", {
        opacity: 1, // Ensure Home is visible
        duration: 1,
        ease: "power2.inOut",
      }, "-=1.5"); // Start fading in Home as soon as the loader starts to move
    }
  }, [loading]);

  return (
    <div className="top" ref={topRef} style={{ overflow: 'hidden' }}> {/* Initially overflow hidden */}
      <div className="loading">
        <Font/>

     
      </div>
      <div className="home">
        <Home />
      </div>
    </div>
  );
};

export default Load;
