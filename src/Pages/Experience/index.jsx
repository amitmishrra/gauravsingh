import { NavLink } from "react-router-dom"
import "./style.css"
import React, { useState } from 'react'
import { useEffect } from 'react';
import expData from "../../Data/ExperienceData";

const Experience = (title, time, pos, p1, p2, p3, p4, p5, p6, p7, p8, p9) => {

  return (
    <main>
      <section>
        <h1>Experience</h1>

        {
          expData.map((index) => {
            return (
              <div className="py-10 w-full ml-1 md:ml-2">
                <div className="flex justify-between gap-2">
                  <div className="w-[49%]">
                    <p className=" text-xl md:text-2xl font-semibold">
                      {title = index.title}
                    </p>
                    <p className="text-lg md:text-xl">
                      {pos = index.pos}
                    </p>
                  </div>
                  <div className="min-w-max md:min-w-max text-lg md:text-xl">
                    {time = index.time}
                  </div>
                </div>

                <div className="innerContainer flex flex-col gap-5 ml-2 my-6 border-l-4 border-[rgb(233 233 233 1)]">

                  <div className={index.p1 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p1}
                    </p>
                  </div>
                  <div className={index.p2 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p2}
                    </p>
                  </div>
                  <div className={index.p3 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p3}
                    </p>
                  </div>
                  <div className={index.p4 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p4}
                    </p>
                  </div>
                  <div className={index.p5 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p5}
                    </p>
                  </div>
                  <div className={index.p6 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p6}
                    </p>
                  </div>
                  <div className={index.p7 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p7}
                    </p>
                  </div>
                  <div className={index.p8 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p8}
                    </p>
                  </div>
                  <div className={index.p9 ? "w-full mt-[5px] relative flex items-center gap-5 font-semibold " : "hidden"}>
                    <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                    <p>
                      {index.p9}
                    </p>
                  </div>

                </div>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Experience
