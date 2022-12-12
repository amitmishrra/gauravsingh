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
                    I am Test Engineer with Skeptical mind and that makes my thoughts flowing and rolling inside my mind, I hunt for bugs in application that makes me bug hunter.
                            <br />
                        </div>

                        <div className="mt-4 text-justify">
                            9.5+ years of experience as an Automation Test Engineer and has worked primarily in the BFSI domain. Most of my experience is in Payment Solutions and Financial Banking.
                            <br />
                        </div>
                        <div className="mt-4 textFont text-justify">
                            Searching for an opportunity where I can have growth in my skillset and become an even more productive asset for the organization.
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