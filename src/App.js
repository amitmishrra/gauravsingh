import { Route, Routes, HashRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Blogs from "./Pages/Blogs";

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
          <Route path="work-history"
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
          <Route path="blogs"
            element={
              <CommonContainer>
              <Blogs/>
              </CommonContainer>
            } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
