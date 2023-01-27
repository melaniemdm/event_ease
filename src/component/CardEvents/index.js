import './style.scss';

export default function CardEvents(){
    return <div className="cardEvents">
        <h1 className="titleEvent">Mes events</h1>

  <div class="ticketContainer">
  <div class="ticket">
    <div class="ticketTitle">Benevola ASMAA</div>
   
    <div class="ticketDetail">
      <div>Objet : &ensp; tototototo</div>
      <div>Nbre de personne:&nbsp; 5</div>
      <div>Time:&emsp; 19:20</div>
    </div>
    <div class="ticketRip">
      <div class="circleLeft"></div>
      <div class="ripLine"></div>
      <div class="circleRight"></div>
    </div>
    <div class="ticketSubDetail">
      <div class="code">LO-2314XXX</div>
      <div class="date"> Jan 14<sup>th</sup> 2023</div>
    </div>
  </div>

</div>
  
<h1 className="titleEvent">Mes events en attente d'approbation</h1>
<div class="ticketContainer">
  <div class="ticket">
    <div class="ticketTitle">Benevola ASMAA</div>
   
    <div class="ticketDetail">
      <div>Objet : &ensp; tototototo</div>
      <div>Nbre de personne:&nbsp; 5</div>
      <div>Time:&emsp; 19:20</div>
    </div>
    <div class="ticketRip">
      <div class="circleLeft"></div>
      <div class="ripLine"></div>
      <div class="circleRight"></div>
    </div>
    <div class="ticketSubDetail">
      <div class="code">LO-2314XXX</div>
      <div class="date"> Jan 14<sup>th</sup> 2023</div>
    </div>
  </div>

</div>

        
    </div>
}