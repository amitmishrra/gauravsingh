import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { NavLink } from "react-router-dom"
import "./styles.css"
import React, { useState } from 'react'
import { useEffect } from 'react';

const Home = () => {
    return (
        <>
            <main className="homePage">
                <section>
                    <h1>
                        I'm Gaurav Singh
                    </h1>
                    <div className="text-center textFont font-black m-auto text-[12.8px] leading-6">
                    <div className="mt-4 text-justify">
                    With over 13 years of experience in automation testing, I bring a sharp eye for detail, a deep-rooted sense of curiosity, and a results-driven mindset to every project. My strong problem-solving abilities, combined with a relentless pursuit of software quality, enable me to uncover hidden issues and ensure robust application performance. 
                            <br />
                        </div>
                        <div className="mt-4 text-justify">
                            Specializing in multiple domains and particularly the BFSI domain—particularly Payment Solutions and Financial Banking—I possess in-depth knowledge of the industry’s standards, challenges, and regulatory requirements. My extensive expertise allows me to deliver high-quality testing solutions that align with business goals and technical needs. 
      <br />
                        </div>
                        <div className="mt-4 textFont text-justify">
                            My goal is to continue growing as a Test Engineer and become an even more productive asset for the company.
                        </div>
                    </div>
                    <div className="textFont mt-8">
                        Let's connect...
                    </div>
                    <div className=" text-lg md:text-xl gap-5 flex justify-around items-center">
                        <a target={"_blank"} href="https://www.linkedin.com/in/gaurav-singh27/">
                            <LinkedInIcon className='socialMedia' fontSize="medium" />
                        </a>
                        <a target={"_blank"} href="mailto:sin.gaurav10@gmail.com">
                            <MailIcon className='socialMedia' fontSize="medium" />
                        </a>

                        <a target={"_blank"} href="https://github.com/String-Gaurav/">
                            <GitHubIcon className='socialMedia' fontSize="medium" />
                        </a>

                        <a target={"_blank"} href="./assets/GauravSinghResume1.pdf">
                            <AttachFileIcon className='socialMedia' fontSize="medium" />
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home
