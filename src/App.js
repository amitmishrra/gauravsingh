import { Route, Routes, HashRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/"
            element={
              <CommonContainer>
                <Home/>
              </CommonContainer>
            } />
          <Route path="experience"
            element={
              <CommonContainer>
                <Experience/>
              </CommonContainer>
            } />
          <Route path="projects"
            element={
              <CommonContainer>
                <Projects/>
              </CommonContainer>
            } />
          <Route path="resume"
            element={
              <CommonContainer>
                <Resume/>
              </CommonContainer>
            } />
          <Route path="contact"
            element={
              <CommonContainer>
                <Contact/>
              </CommonContainer>
            } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
