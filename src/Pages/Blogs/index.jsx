import { NavLink } from "react-router-dom"
import "./style.css"
import React, { useState } from 'react'
import { useEffect } from 'react';
import blogsData from "../../Data/BlogsData.json"

const Blogs = () => {
  return (
    <main>
      <section>
        <h1>Blogs.</h1>
        
        <div className="blogs flex md:flex-row flex-col justify-center items-center flex-wrap">
        {
          blogsData.map((data)=>{
            return(
              <NavLink to={data.link}>
                <div className="container flex items-center p-3  w-[90vw] md:w-[40vw] md:h-[35vh] h-[20vh] rounded-2xl bg-gray-200 shadow-xl my-4">
                    <img src={data.img} className=" object-cover h-[9rem] w-[30%]  md:h-full rounded" alt="" />
                    <div className=" w-[70%] pl-3 flex flex-col">
                        <h1 className=" text-[17px] md:text-[24px] font-semibold mb-2">
                             {data.title}
                        </h1>
                        <p className=" text-justify mb-2 text-[12px] md:text-[14px]">
                        {data.data}
                        </p>
                        <button className="readbtn text-[12px] md:text-[14px] w-[35%]">
                            Read more
                        </button>
                    </div>
                </div>
            </NavLink>
            )
          })
        }
        </div>

      </section>
    </main>
  )
}

export default Blogs