import { NavLink } from "react-router-dom"
import "./style.css"
import React from 'react'
import projData from "../../Data/ProjectData"


const Projects = () => {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        <div className="py-[5rem] w-full flex flex-col items-center flex-wrap">
          {
            projData.map((item) => {
              return (
                  <div className="card relative block w-full md:w-[20rem] h-[20rem] rounded-xl">
                    <img src={item.card_Img} alt="" className="card-img w-full object-scale-down max-h-[20rem]" />
                    <div className="card-desc absolute w-full bottom-0 left-0 p-2 rounded-xl text-white bg-gradient-to-b from-transparent to-[#00000060]">
                      <p className="project-name text-3xl font-bold">
                        {item.proj_Name}
                      </p>
                      <p className="project-desc py-2 text-xl font-bold">
                        {item.proj_Desc}
                      </p>
                      <div className="techStack pt-2 flex gap-2 font-bold">
                        <div className={item.techStack1 ? "techstack rounded-[10px] p-1 bg-[#29292970]" : "hidden" }>
                          {item.techStack1}
                        </div>
                        <div className={item.techStack2 ? "techstack rounded-[10px] p-1 bg-[#29292970]" : "hidden" }>
                          {item.techStack2}
                        </div>
                        <div className={item.techStack3 ? "techstack rounded-[10px] p-1 bg-[#29292970]" : "hidden" }>
                          {item.techStack3}
                        </div>
                        <div className={item.techStack4 ? "techstack rounded-[10px] p-1 bg-[#29292970]" : "hidden" }>
                          {item.techStack4}
                        </div>
                        <div className={item.techStack5 ? "techstack rounded-[10px] p-1 bg-[#29292970]" : "hidden" }>
                          {item.techStack5}
                        </div>
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