import './style.scss';

export default function Calendar(){
    return <div className="calendarStyle" >
        <div className="calendarContainer">
<h1>Mon calendier</h1><br></br>
<div className="calendar">calendrier </div>
</div>
<br key={1}></br>
<h1>Mes Events du jour</h1><br key={2}></br>
<table className="event1">
    <tr><th>Heure</th><th>Objet</th></tr>
    <tr><td>9H00</td><td>ceci est un test</td></tr>
</table>
<br></br><h1>Mes Events à venir</h1><br key={3}></br>
<table className="event1">
    <tr><th>Date</th><th>Heure</th><th>Objet</th></tr>
    <tr><td>28/02</td><td>9H00</td><td>ceci est un test</td></tr>
    <tr><td>29/02</td><td>12H00</td><td>ceci est un test</td></tr>
</table>
    </div>



}