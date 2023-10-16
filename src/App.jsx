import "./App.css";

import Main from "./Pages/Main";
import SingleProject from "./Pages/SingleProject";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:projectURL" element={<SingleProject />} />
      </Routes>
    </>
  );
}

export default App;
