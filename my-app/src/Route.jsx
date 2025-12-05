import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup.jsx";
import TestList from "./TestList.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/SignIn" element={<TestList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;