import './style.scss';
import Header from '../Header';
export default function NewEvent(){
    return <div className='formEventPages'> <Header/>
    <div class="containerFormNewEvent">
  <h1 className='titleNewEvent'>Création d'un nouvel Event</h1>
  <form action="/action_page.php"> 
    <label for="ftitre">Titre</label>
    <input type="text" id="ftitre" name="titreEvent" placeholder="Titre de votre invitation"/>

    <label for="sujet">Lieu</label>
    <input type="text" id="lieu" name="lieu" placeholder="Lieu de votre invitation"/>

    <label for="fname">Votre nom</label>
    <input type="text" id="fname" name="name" placeholder="Titre de votre invitation"/>

    <label for="emailAddress">Email</label>
    <input id="emailAddress" type="email" name="email" placeholder="Votre email"/>


    <label for="emailAddressParticipants">Participants</label>
    <input id="emailAddressParticipants" type="email" name="email" placeholder="Email des participants" />

    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Votre message" ></textarea>

    <input type="submit" value="Envoyer"/>
  </form>
</div>
    
    
    
    
    </div>
}