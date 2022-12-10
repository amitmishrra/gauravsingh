// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                            9.5+ years of experience as an Automation Test Engineer and has worked primarily in the BFSI domain. Most of my experience is in Payment Solutions and Financial Banking.
                            <br />
                        </div>
                        <div className="mt-4 textFont text-justify">
                            Searching for an opportunity where I can have growth in my skillset and become an even more productive asset for the organization.
                        </div>

                        <div className="textFont mt-4 text-justify ">
                            ence is in Payment Solutions and Financial Banking. Searching for an opportunity where I can have growth in my skillset and become an even more productive asset for the organization.
                        </div>
                    </div>

                    <div className="mt-8 greeting text-lg md:text-xl  flex items-center">
                        <button >See more about me</button>
                        <button className="arrow ml-4">→</button>
                    </div>

                </section>
            </main>
        </>
    )
}
export default Home