import { NavLink } from "react-router-dom"
import "./style.css"
import React, { useState } from 'react'
import { useEffect } from 'react';
import expData from "../../Data/ExperienceData.json";

const Experience = (title, time, pos, p1, p2, p3, p4, p5, p6, p7, p8, p9) => {

  return (
    <main>
      <section>
        <h1 className="underLineStyle">Experience.</h1>

        {
          expData.map((index) => {
            return (
              <div className="py-10 w-full ml-1 md:ml-2">
                <div className="flex justify-between gap-2">
                  <div className="w-[49%]">
                    <div className="flex flex-row items-center">
                      <img src={index.icon} className="w-[30px] mr-2 rounded-[20px]" alt="" />
                      <p className=" text-md md:text-lg font-semibold ">
                        {title = index.title}
                      </p>
                    </div>
                    <p className="text-md italic mt-2">
                      {pos = index.pos}
                    </p>
                  </div>
                  <div className="min-w-max md:min-w-max text-sm md:text-sm textFont">
                    {time = index.time}
                  </div>
                </div>

                <div className="innerContainer flex flex-col gap-4 ml-2 my-4 border-l-4 border-[rgb(233 233 233 1)]">
                  {
                    index.responsibility.map((data) => {
                      return (
                        <div className={"w-full mt-[5px] relative flex items-center gap-5 font-semibold text-[12px] font-bold"}>
                          <i className=" -ml-[.70rem] md:-ml-[.56rem] h-1 p-2 md:p-[.4em] rounded-[50%] border border-black"></i>
                          <p>
                            {data}
                          </p>
                        </div>
                      )
                    })
                  }
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
