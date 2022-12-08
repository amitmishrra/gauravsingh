import { Route, Routes, HashRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Home from "./Pages/Home";

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
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
