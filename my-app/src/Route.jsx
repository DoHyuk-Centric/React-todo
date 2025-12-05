import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup.jsx";
import TestList from "./TestList.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/test" element={<TestList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;