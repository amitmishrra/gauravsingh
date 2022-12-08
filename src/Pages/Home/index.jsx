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
            <main className="maxWidth homePage pt-32 md:pt-[29vh] md:p-[20px] md:w-[65%] md:m-auto">
                <div className="greeting  md:text-[50px] text-[40px] ml-[5%] md:ml-0">
                   I'm Gaurav Singh
                </div>
                <div className="w-[90%] md:w-[100%] text-center textFont font-black m-auto mt-[2.5rem] text-[12.8px] leading-6">
                    <div className="mt-4 text-justify md:w-[75%]">
                        9.5+ years of experience as an Automation Test Engineer and has worked primarily in the BFSI domain. Most of my experience is in Payment Solutions and Financial Banking.
                        <br />
                    </div>
                    <div className="mt-4 textFont  text-justify md:w-[75%]">
                        Searching for an opportunity where I can have growth in my skillset and become an even more productive asset for the organization.
                    </div>

                    <div className="textFont mt-4 text-justify md:w-[75%]">
                        ence is in Payment Solutions and Financial Banking. Searching for an opportunity where I can have growth in my skillset and become an even more productive asset for the organization.
                    </div>
                </div>

                <div className="ml-[5%] md:ml-0 mt-8 textFont font-bold">
                    <button >See more about me →</button>
                </div>

            </main>
        </>
    )
}
export default Home