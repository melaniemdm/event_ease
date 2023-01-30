import { useEffect } from 'react';
import './style.scss';


let currentMonth;
let calendarDays;
let today = new Date();
let date = new Date();

today.setHours(0,0,0,0);



function renderCalendar(){
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const totalMonthDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const startWeekDay = new Date(date.getFullYear(),date.getMonth(),1).getDay();
    calendarDays = document.querySelector(".calendar-days");
    calendarDays.innerHTML = "";

    let totalCalendarDay = 6 * 7;
    for (let i = 0; i < totalCalendarDay; i++) {
        let day = i-startWeekDay;

        if(i <= startWeekDay){
            // adding previous month days
            calendarDays.innerHTML += `<div class='padding-day'>${prevLastDay-i}</div>`;
        }else if(i <= startWeekDay+totalMonthDay){
            // adding this month days
            date.setDate(day);
            date.setHours(0,0,0,0);
            
            let dayClass = date.getTime()===today.getTime() ? 'current-day' : 'month-day';
            console.log(dayClass);
            calendarDays.innerHTML += `<div class='${dayClass}'>${day}</div>`;
        }else{
            // adding next month days
            calendarDays.innerHTML += `<div class='padding-day'>${day-totalMonthDay}</div>`;
        }
    }
}


export default function Calendar(){
    useEffect(()=>{
        renderCalendar();  
        currentMonth = document.querySelector(".current-month");
        if(currentMonth){
            currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
            }
        
document.querySelectorAll(".month-btn").forEach(function (element) {
	element.addEventListener("click", function () {
		date = new Date(currentMonth.textContent);
        date.setMonth(date.getMonth() + (element.classList.contains("prev") ? -1 : 1));
		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});
});

document.querySelectorAll(".btn").forEach(function (element) {
	element.addEventListener("click", function () {
        let btnClass = element.classList;
        date = new Date(currentMonth.textContent);
        if(btnClass.contains("today"))
            date = new Date();
        else if(btnClass.contains("prev-year"))
            date = new Date(date.getFullYear()-1, 0, 1);
        else
            date = new Date(date.getFullYear()+1, 0, 1);
        
		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});
});   
     })
    return <div className="calendarStyle" >
        <div className="calendarContainer">
<h1>Mon calendier</h1><br></br>
<div className="calendar">
    
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
<div className="card">
  <div className="calendar-toolbar">
    <button className="prev month-btn"><i className="fas fa-chevron-left"></i></button>
    <div className="current-month"></div>
    <button className="next month-btn"><i className="fas fa-chevron-right"></i></button>
  </div>
  <div className="calendar">
    <div className="weekdays">
      <div className="weekday-name">Sa</div>
      <div className="weekday-name">Su</div>
      <div className="weekday-name">Mo</div>
      <div className="weekday-name">Tu</div>
      <div className="weekday-name">We</div>
      <div className="weekday-name">Th</div>
      <div className="weekday-name">Fr</div>
    </div>
    <div className="calendar-days"></div>
  </div>
  <div className="goto-buttons">
    <button type="button" className="btn prev-year">Prev Year</button>
    <button type="button" className="btn today">Today</button>
    <button type="button" className="btn next-year">Next Year</button>
  </div>
</div>
       
    
    
     </div>
</div>
<br key={1}></br>

<h1>Mes Events du jour</h1><br key={2}></br>
<table className="event1">
<tbody>
    <tr><th>Heure</th><th>Objet</th></tr>
    <tr><td>9H00</td><td>ceci est un test</td></tr>
</tbody>
</table>
<br></br><h1>Mes Events à venir</h1><br key={3}></br>
<table className="event1">
<tbody>
    <tr><th>Date</th><th>Heure</th><th>Objet</th></tr>
    <tr><td>28/02</td><td>9H00</td><td>ceci est un test</td></tr>
    <tr><td>29/02</td><td>12H00</td><td>ceci est un test</td></tr>
    </tbody>
</table>
    </div>



}