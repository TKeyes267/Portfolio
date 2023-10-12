import "./App.css";

import Main from "./Pages/Main";
import SingleProject from "./Pages/SingleProject";
import Header from "./Pages/Header";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/Portfolio/"}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:projectURL" element={<SingleProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
