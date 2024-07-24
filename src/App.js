import "./App.css";
import SenseiProfile from "./components/senseiCard/senseiComponent";
import { senseiData } from "./components/senseiCard/senseiData";
import PhotoCarousel from "./components/slideShow/slideShow";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1 className="title">Jeet Kune Do</h1>
         </header>
         <main>
            <div className="slideShowContainer">
               <PhotoCarousel />
            </div>

            <div className="jkdStory">
               <h2>Le Jeet Kune Do</h2>
               <p>
                  Le Jeet Kune Do (JKD) pourrait se définir comme un art martial
                  dont l'objectif est le naturel et la simplicité. Mis au point
                  par son fondateur Bruce Lee dans les années 70, on parle
                  traditionnellement de «Jun Fan Gung-fu», une «boxe chinoise»
                  basée sur le principe d'interception ou d'attaque dans
                  l'attaque. À ce principe d'autres notions viennent compléter
                  l'art, faisant du JKD un ensemble martial très complet tant
                  sur l'attaque que sur la défense (active). On peut noter des
                  principes généraux comme l'absence de mouvements
                  télégraphiques, la garde «inversée» non classique, le vecteur
                  le plus long et puissant proche de la cible la plus proche, la
                  rupture de rythme, l'adaptabilité, la ligne centrale, le jeu
                  de jambe, l'énergie du sol, et bien d'autres. Il faut
                  également retenir que le JKD vise l'économie des mouvements
                  superflus pour une plus puissante efficience d'attaque ou
                  d'interception. La vulgarisation de cet art a conduit à de
                  nombreuses branches, qui sont des traductions plus ou moins
                  fidèles à la forme originelle. L'interprétation du Jeet Kune
                  Do est personnelle mais sa base est commune. Nous vous
                  invitons à venir découvrir cet art et en apprendre les
                  principes de bases originaux s'appliquant en combat comme dans
                  nos quotidiens.
               </p>
            </div>

            <div className="senseiContainer">
               <h2>Les enseignants</h2>
               <div className="sensei">
                  {senseiData.map((sensei, index) => (
                     <SenseiProfile
                        key={index}
                        name={sensei.name}
                        image={sensei.image}
                        story={sensei.story}
                     />
                  ))}
               </div>
            </div>

            <div className="infos">
               <div className="scheduleAndContact">
                  <div className="schedule box">
                     <h3>Horaires</h3>
                     <p>Adultes tous niveaux : mercredi de 19h30 à 21h</p>
                  </div>
                  <div className="contact box">
                     <h3>Association JKD BORDEAUX</h3>
                     <p>Informations et inscriptions </p>
                     <p>Bérengère Bruneau </p>
                     <p>06.95.46.50.97 </p>
                     <p>rayeberengere@gmail.com </p>
                  </div>
               </div>

               <div className="pricing box">
                  <h3>Tarifs</h3>
                  <p>adultes</p>
                  <p>Forfait tous cours : 395€ / an + 15€ d'adhésion</p>
                  <p>
                     Possibilité de participer à tous les cours sur
                     Bordeaux-Bastide et
                  </p>
                  <p>Bordeaux-Chartrons, soit 3 cours par semaine</p>
               </div>
            </div>
         </main>
      </div>
   );
}

export default App;
