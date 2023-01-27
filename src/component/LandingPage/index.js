import { HashLink as Link } from "react-router-hash-link";
import './style.scss';
import logo from '../../asset/event.png';
import calendar from '../../asset/calendar.svg';


export default function LandingPage(){
    return <div>
<div className="container">

  <main className="signup-container">
    <div> <img src={logo} className="App-logo" alt="logo" />
    
    <div className="accroche">Simplifiez votre vie en organisant vos rendez-vous <br></br> et tâches avec notre application de calendrier ultra-efficace !</div></div> 
    
   
    <form className="signup-form">
    <p className="text-mute">Enter your credentials to access your account.</p>
      <label className="inp">
        <input type="email" className="input-text" placeholder="&nbsp;"/>
        <span className="label">Email</span>
        <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
      </label>
      <label className="inp">
        <input type="password" className="input-text" placeholder="&nbsp;" id="password"/>
        <span className="label">Password</span>
        <span className="input-icon input-icon-password" data-password><i className="fa-solid fa-eye"></i></span>
      </label>
      <button className="btn btn-login">Login</button>
    </form>


    <p className="text-mute">Not a member? 
    <Link to="/inscription" className='SignUp'>Sign up
    </Link></p>
    <Link to="/profile" className='SignUp'>profile
    </Link>
  </main>
  <div className="welcome-container">
    <h1 className="heading-secondary">Welcome to <span className="lg">EVENT EASE !</span></h1>
    <img src={calendar} alt="photos"/>
  </div>
</div>


        
    </div>
}