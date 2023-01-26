import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../component/LandingPage";
import SignUp from "../component/SignUp";

export default function CustomsRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/accueil" element={<LandingPage/>}/>
        <Route exact path="/inscrption" element={<SignUp/>}/>
       </Routes>
    </Router>
  );
}
