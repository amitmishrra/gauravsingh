import { NavLink } from "react-router-dom"
import "./style.css"
import React, { useState } from 'react'
import { useEffect } from 'react';
import blogsData from "../../Data/BlogsData.json"

const Blogs = () => {
  return (
    <main>
      <section className=" ">
        <h1>Blogs.</h1>
        
        <div className="blogs flex lg:flex-row flex-col justify-center items-center flex-wrap">
        {
          blogsData.map((data)=>{
            return(
          
                <div onClick={()=>{window.open(data.link, "_blank")}} className="container flex items-center p-3  w-[90%] lg:w-[40vw] lg:h-[35vh] h-[25vh] rounded-2xl bg-gray-200 shadow-xl my-4">
                    <img src={data.img} className=" object-cover h-[9rem] w-[30%]  lg:h-full rounded" alt="" />
                    <div className=" w-[70%] pl-3 flex flex-col justify-around">
                        <h1 className=" text-[15px] md:text-[24px] font-semibold mb-2">
                             {data.title}
                        </h1>
                        <p className=" text-justify mb-2 text-[12px] md:text-[14px]">
                        {data.data}
                        </p>
                        <button onClick={()=>{window.open(data.link, "_blank")}} className="readbtn text-[12px] md:text-[14px] w-[35%]">
                            Read more
                        </button>
                    </div>
                </div>
            )
          })
        }
        </div>

      </section>
    </main>
  )
}

export default Blogs