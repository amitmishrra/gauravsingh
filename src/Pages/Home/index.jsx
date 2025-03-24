import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                    As a seasoned Test Engineer with 13+ years of experience in automation testing, I bring a unique blend of skepticism and technical expertise to my role. My curious mind and bug-hunting skills make me an exceptional problem solver, constantly on the lookout for flaws in software applications. 
                            <br />
                        </div>
                        <div className="mt-4 text-justify">
                            With a focus on the BFSI domain, particularly in Payment Solutions and Financial Banking, I have a deep understanding of the requirements and challenges faced by this industry. I am always seeking new opportunities to expand my skillset and make a valuable contribution to any organization. 
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
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home
