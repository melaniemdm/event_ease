import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../component/LandingPage";
import SignUp from "../component/SignUp";
import Profile from "../pages/Profile";

export default function CustomsRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/accueil" element={<LandingPage/>}/>
        <Route exact path="/inscription" element={<SignUp/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
       </Routes>
    </Router>
  );
}
