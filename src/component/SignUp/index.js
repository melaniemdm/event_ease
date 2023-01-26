import Header from '../Header';
import './style.scss';
//import inscription from '../../asset/inscription.svg'
export default function SignUp(){
    return  <section id="contactMe">  
    <Header/>
    <div className="containerContact" >

      <div className="containerForm">
<h1 className="titleForm">Inscrivez vous maintenant  ! </h1>

        <iframe
          src="https://tally.so/embed/wkbB4j?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"

          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Nous contacter">
        </iframe>

      </div>


    </div>
   
    </section>
}