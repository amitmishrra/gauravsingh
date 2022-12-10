import "./style.css"
import React from 'react'
import projData from "../../Data/ProjectData"


const Projects = () => {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        <div className="pt-[5rem] w-full flex gap-16 md:gap-[2rem] justify-center md:justify-between flex-wrap">
          {
            projData.map((item) => {
              return (
                <a href={item.proj_Link}>
                  <div className="card bg-orange-400">
                    <img src={item.card_Img} alt="" className="card-img" />
                    <div className="card-desc">
                      <p className="project-name text-3xl font-bold">
                        {item.proj_Name}
                      </p>
                      <p className="project-desc py-2 text-xl font-bold">
                        {item.proj_Desc}
                      </p>
                      <div className="pt-2 flex gap-2 font-bold">

                        <div className={item.techStack1 ? "techstack" : "hidden"}>
                          {item.techStack1}
                        </div>
                        <div className={item.techStack2 ? "techstack" : "hidden"}>
                          {item.techStack2}
                        </div>
                        <div className={item.techStack3 ? "techstack" : "hidden"}>
                          {item.techStack3}
                        </div>
                        <div className={item.techStack4 ? "techstack" : "hidden"}>
                          {item.techStack4}
                        </div>
                        <div className={item.techStack5 ? "techstack" : "hidden"}>
                          {item.techStack5}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Projects