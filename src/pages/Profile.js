import Calendar from '../component/Calendar';
import CardEvents from '../component/CardEvents';
import Header from '../component/Header';
import Navigate from '../component/Navigate';

import './style.scss';
export default function Profile(){
    return <div>
        <Header/>
        <Navigate/>
        <div className="organisationBody">
     <Calendar/>
     <CardEvents/>  </div> 
    </div>
}