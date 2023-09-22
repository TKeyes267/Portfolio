import "./App.css";

import Main from "./Pages/Main";
import SingleProject from "./Pages/SingleProject";
import Header from "./Pages/Header";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:projectURL" element={<SingleProject />} />
      </Routes>
    </>
  );
}

export default App;
