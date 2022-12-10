import { NavLink } from "react-router-dom"
import "./style.css"
import React, { useState } from 'react'
import { useEffect } from 'react';

const Resume = () => {
    return (
      <main>
          <section className="md:w-[75%]">
            <h1>Resume.</h1>

            <div className="textFont">
              Click to see the resume.
            </div>

          <div className="resume md:mt-2 mt-8 flex md:flex-row flex-col justify-between ">
              <a href="assets/Gaurav Singh.pdf" target="_blank" className="mt-2">
                <img src="assets/Gaurav Singh-1.png" className=" w-[97%] shadow-2xl" alt="" />
              </a>

              <a href="assets/Gaurav Singh.pdf" target="_blank" className="mt-2">
              <img src="assets/Gaurav Singh-2.png" className=" w-[97%] shadow-2xl" alt="" />
              </a>
          </div>
          </section>
      </main>
    )
  }
  
  export default Resume