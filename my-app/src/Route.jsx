import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup.jsx";
import Signin from "./component/signin.jsx";
import MainPage from "./component/mainPage.jsx";
import LoginGuard from "./component/RouteGuard/LoginGuard.jsx"

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Signup" element={<LoginGuard><Signup /></LoginGuard>} />
      <Route path="/SignIn" element={<LoginGuard><Signin /></LoginGuard>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
