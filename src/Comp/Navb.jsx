import React from 'react'
import '../../src/App.css'
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from 'react-router-dom';


function Navb() {
  return (
    <>
    <div className="nav">
        <div className="logo">
          <div className="ov">
          <h1>gumshoe</h1>
          </div>
        </div>
        <div className="navi ">
          {/* <NavLink className='newani' to="/Project" > Project <MdArrowOutward /> </NavLink> */}
          <li className='newani'>Project</li>
          <li className='newani'>About</li>
          <li className='newani'>News</li>
          <li className='newani'>Contact</li>
          <li className='newani'>Career</li>

        </div>

    </div>
    </>
  )
}

export default Navb