import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




function Sec3() {


    useGSAP(() => {
        const ts4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".upper-in",
                start: "top 40%",
                end:"bottom 100%",
                scrub: 2,

            }
        })

        ts4.from(".upper-in span , .upper-in h1 , .upper-in p , .upper-in a ", {
            x: -30,
            opacity: 0,
            stagger:1,
            scrub:2,

        })

    })

    return (
        <div className='sec3'>
            <div className="inner-sec3">
            </div>

            <div className="upper">
                <div className="upper-in">
                    <span>CAREERS</span>
                    <h1>Latest jobs</h1>
                    <p>Hiring talented, hard-working people and helping them thrive is critical to our success. When you join our team, we will empower you to unlock your potential so you can do your best work. We’d love to hear how you think you could make a difference here with us .</p>
                    <a href="" className='newani'>Read more <MdArrowOutward /></a>
                </div>

            </div>

        </div>
    )
}

export default Sec3