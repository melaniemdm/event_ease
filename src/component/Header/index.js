import logo from '../../asset/event.png';
import './style.scss';

export default function Header(){
    return <div className="headerContainer">
     <img src={logo} className="App-logo headerlogo" alt="logo" />
    </div>
}