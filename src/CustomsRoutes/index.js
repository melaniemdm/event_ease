import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../component/LandingPage";
import NewEvent from "../component/NewEvent";
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
        <Route exact path="/newEvent" element={<NewEvent/>}/>
       </Routes>
    </Router>
  );
}
