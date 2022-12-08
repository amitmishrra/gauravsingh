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
            <main className="maxWidth pt-24 md:pt-[29vh] ">
                <div className="greeting  text-[40px] md-[45px] ml-[5%] md:ml-0">
                    Hello, 
                    {/* <br /> */}
                    Gaurav Singh here.
                </div>
                <div className="w-[90%] md:w-[100%] text-center textFont font-black m-auto text-[14px]">
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