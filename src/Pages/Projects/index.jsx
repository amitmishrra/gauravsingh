import { NavLink } from "react-router-dom"
import "./style.css"
import React from 'react'
import projData from "../../Data/ProjectData"

const Projects = () => {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        <div className="py-[2rem] w-full flex flex-col items-center flex-wrap">
            {
              projData.map((data)=>{
                return(
                  <div className="card relative block w-full md:w-[35rem] h-[20rem] rounded-xl my-4 cursor-pointer" onClick={()=>{window.open(data.link, "_blank")}}>
                  <img src={data.card_Img} alt="" className="card-img w-full object-scale-down max-h-[20rem]" />
                  <div className="card-desc absolute w-full bottom-0 left-0 p-2 rounded-xl text-white bg-gradient-to-b from-transparent to-[#080808]">
                    <p className="project-name text-3xl font-bold">
                      {data.proj_Name}
                    </p>
                    <p className="project-desc py-2 text-xl font-bold">
                      {data.proj_Desc}
                    </p>
                    <div className="techStack pt-2 flex gap-2 font-bold flex-wrap">
                      {
                        data.techStack.map((item) => {
                          return (
                            <div className={"techstack rounded-[10px] p-1 bg-[#29292970]"}>
                              {item}
                            </div>
                          )
                        })
                      }
                    </div>
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

export default Projects