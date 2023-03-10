import './style.scss';
import { HashLink as Link } from "react-router-hash-link";

export default function Header(){
    return <nav className="containerNavigate"><ul className="navigate">
    <li className="navItem"><p>Setting</p></li>
    <Link to="/newEvent"  className="navItem"><p>New Event</p></Link>
    <li className="navItem"><p>Event</p></li>
    <li className="navItem"><p>Profil</p></li>
    <li className="navItem"><p>Home</p></li>
  </ul></nav>
}

