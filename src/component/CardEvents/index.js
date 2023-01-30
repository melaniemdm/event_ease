import './style.scss';

export default function CardEvents(){
    return <div className="cardEvents">
        <h1 className="titleEvent">Mes events</h1>

  <div className="ticketContainer">
  <div className="ticket">
    <div className="ticketTitle">Benevola ASMAA</div>
   
    <div className="ticketDetail">
      <div>Objet : &ensp; tototototo</div>
      <div>Nbre de personne:&nbsp; 5</div>
      <div>Time:&emsp; 19:20</div>
    </div>
    <div className="ticketRip">
      <div className="circleLeft"></div>
      <div className="ripLine"></div>
      <div className="circleRight"></div>
    </div>
    <div className="ticketSubDetail">
      <div className="code">LO-2314XXX</div>
      <div className="date"> Jan 14<sup>th</sup> 2023</div>
    </div>
  </div>

</div>
  
<h1 className="titleEvent">Mes events en attente d'approbation</h1>
<div className="ticketContainer">
  <div className="ticket">
    <div className="ticketTitle">Benevola ASMAA</div>
   
    <div className="ticketDetail">
      <div>Objet : &ensp; tototototo</div>
      <div>Nbre de personne:&nbsp; 5</div>
      <div>Time:&emsp; 19:20</div>
    </div>
    <div className="ticketRip">
      <div className="circleLeft"></div>
      <div className="ripLine"></div>
      <div className="circleRight"></div>
    </div>
    <div className="ticketSubDetail">
      <div className="code">LO-2314XXX</div>
      <div className="date"> Jan 14<sup>th</sup> 2023</div>
    </div>
  </div>

</div>

        
    </div>
}