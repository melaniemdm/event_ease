import logo from '../../asset/event.png';
import './style.scss';
import { HashLink as Link } from "react-router-hash-link";


export default function Header(){
    return <div className="headerContainer">
    <Link to="/accueil"><img src={logo} className="App-logo headerlogo" alt="logo" /></Link> 
    </div>
}