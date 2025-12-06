import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup.jsx";
import Signin from "./component/signin.jsx";
import MainPage from "./component/MainPage.jsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/SignIn" element={<Signin />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
