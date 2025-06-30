import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { NavLink } from "react-router-dom";
import "./styles.css";
import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <main className="homePage">
        <section>
          <h1>I'm Gaurav Singh</h1>
          <div className="text-center textFont font-black m-auto text-[12.8px] leading-6">
            <div className="mt-4 text-justify">
              With over 13 years of experience in software testing, I bring a
              sharp eye for detail, a strong analytical mindset, and a
              commitment to delivering high-quality software solutions. My
              expertise spans automation, functional, regression, integration,
              and end-to-end testing, enabling me to ensure thorough validation
              across all layers of application architecture.
              <br />
            </div>
            <div className="mt-4 text-justify">
              I have a proven track record of working on complex, large-scale
              applications and enterprise systems, particularly within the BFSI
              domain—focusing on Payment Solutions and Financial Banking. My
              deep understanding of industry standards, regulatory compliance,
              and system workflows allows me to design and execute effective
              testing strategies that align with both business and technical
              objectives.
              <br />
            </div>
            <div className="mt-4 textFont text-justify">
              Driven by a problem-solving approach and a continuous improvement
              mindset, I strive to uncover hidden issues early in the
              development lifecycle and enhance overall product quality. I am
              passionate about evolving as a Test Engineer and adding value
              through reliable, scalable, and business-aligned quality
              engineering solutions.
            </div>
          </div>
          <div className="textFont mt-8">Let's connect...</div>
          <div className=" text-lg md:text-xl gap-5 flex justify-around items-center">
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/gaurav-singh27/"
            >
              <LinkedInIcon className="socialMedia" fontSize="medium" />
            </a>
            <a target={"_blank"} href="mailto:sin.gaurav10@gmail.com">
              <MailIcon className="socialMedia" fontSize="medium" />
            </a>

            <a target={"_blank"} href="https://github.com/String-Gaurav/">
              <GitHubIcon className="socialMedia" fontSize="medium" />
            </a>

            <a target={"_blank"} href="./assets/GauravSinghResume1.pdf">
              <AttachFileIcon className="socialMedia" fontSize="medium" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
