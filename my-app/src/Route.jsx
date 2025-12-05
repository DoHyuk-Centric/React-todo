import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup.jsx";
import Signin from "./signin.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/SignIn" element={<Signin />} />
    </Routes>
  </BrowserRouter>
);

export default Router;