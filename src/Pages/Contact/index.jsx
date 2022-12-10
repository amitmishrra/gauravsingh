import { NavLink } from "react-router-dom"
import "./style.css"
import React, { useState } from 'react'
import { useEffect } from 'react';

const Contact = () => {
  return (
    <main>
      <section>
        <h1>Contact</h1>
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

        <div className="mt-8 greeting flex items-center">
          <button >See more about me</button>
          <button className="arrow ml-4">→</button>
        </div>
        <div className="text-center textFont font-black m-auto mt-[2.5rem] text-[12.8px] leading-6">
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

        <div className="mt-8 greeting flex items-center">
          <button >See more about me</button>
          <button className="arrow ml-4">→</button>
        </div>
      </section>
    </main>
  )
}

export default Contact