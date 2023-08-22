import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Formation from "../assets/img/education.png";
import Experience from "../assets/img/experience-utilisateur (2).png";
import Competences from "../assets/img/langage-de-codage (2).png";
import HTML from "../assets/img/testHtml.png";
import CSS from "../assets/img/testCSS.png";
import JS from "../assets/img/testJS.png";
import Node from "../assets/img/testNode.png";
import ReactIcon from "../assets/img/testReact.png";
import Express from "../assets/img/testExpress.png";
import SQL from "../assets/img/testSql.png";
import GitHub from "../assets/img/testGitHub.png";
import DOM from "../assets/img/testDom.png";
import VSCode from "../assets/img/vsCode.png";
import Git from "../assets/img/github2.png";
import Postman from "../assets/img/postman.png";
import Figma from "../assets/img/figma.png";
import Trello from "../assets/img/trello.png";
import MacOS from "../assets/img/macOS.png";
import Windows from "../assets/img/windows.png";
import Logoist from "../assets/img/logoist.png";
import FinalCut from "../assets/img/finalCut.png";

const CarouselExperience = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      emulateTouch={true}
      infiniteLoop={true}
      selectedItem={0}
    >
      {/* Diapositive 1 */}
      <div className="generalContainerCarousel">
        <div className="insideContainerCarousel">
          <div className="imgCarouselContainer">
            <img id="imgCarousel" src={Formation} alt="Formation" />
            <h1>FORMATIONS</h1>
          </div>
          <div className="contentCarouselContainer">
            <div>
              <span>Estiam - Oct. 2023 à Sept. 2024</span>
              <p>
                <strong>3eme année Data & Application Développement</strong>
                <br />
                Développement des applications mobiles, Java, C#, Angular,
                Node.JS, Business intelligence, Méthode agile, Administration OS
                Serveur
              </p>
            </div>
            <div>
              <span>Wild Code School - Mai 2023 à Oct. 2023</span>
              <p>
                <strong>Formation développeur Web et Web mobile</strong>
                <br />
                HTML, CSS, JavaScript, DOM, React, Express (NodeJS), SQL
              </p>
            </div>
            <div>
              <span>Tours alternance formation - 2016</span>
              <p>BTS Négociation Relation Client</p>
            </div>
            <div>
              <span>Tours alternance formation - 2014</span>
              <p>Bac Pro Commerce</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diapositive 2 */}
      <div className="generalContainerCarousel">
        <div className="insideContainerCarousel">
          <div className="imgCarouselContainer">
            <img id="imgCarousel" src={Experience} alt="Expérience" />
            <h1>EXPÉRIENCE</h1>
          </div>
          <div className="contentCarouselContainer">
            <div>
              <span>Responsable régional des ventes</span>
              <p>Groupe SCAPA FRANCE (Mars 2022 - Février 2023)</p>
            </div>
            <div>
              <span>Backpacker / Joueur de poker professionnel</span>
              <p>Janvier 2020 - Mars 2022</p>
            </div>
            <div>
              <span>Responsable régional des ventes</span>
              <p>Faynot (Juillet 2017 - Décembre 2019)</p>
            </div>
            <div>
              <span>Commercial Marketing WEB</span>
              <p>Aerial Conseil (Octobre 2016 - Décembre 2016)</p>
            </div>
            <div>
              <span>Conseiller Technico-Commercial</span>
              <p>Kiloutou (Septembre 2012 - Septembre 2016)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diapositive 3 */}
      <div className="generalContainerCarousel">
        <div className="insideContainerCarousel">
          <div className="imgCarouselContainer">
            <img id="imgCarousel" src={Competences} alt="Compétences" />
            <h1>COMPÉTENCES</h1>
          </div>
          <div className="logoMajorContainerCarousel">
            <div className="titleContainerExperienceCarousel">
              <h1>Languages / Frameworks</h1>
            </div>
            <div className="logoContainerCarousel">
              <div className="logo Left">
                <img src={HTML} alt="Html" />
                <span>HTML</span>
                <img src={CSS} alt="CSS" />
                <span>CSS</span>
                <img src={JS} alt="Javascript" />
                <span>JavaScript</span>
              </div>
              <div className="logo Middle">
                <img src={Node} alt="Node" />
                <span>Node</span>
                <img src={ReactIcon} alt="React" />
                <span>React</span>
                <img src={Express} alt="Express" />
                <span>Express</span>
              </div>
              <div className="logo Right">
                <img src={SQL} alt="SQL" />
                <span>SQL</span>
                <img src={GitHub} alt="Git" />
                <span>Git</span>
                <img src={DOM} alt="<DOM>" />
                <span>DOM</span>
              </div>
            </div>
          </div>
          <div className="logoMajorContainerCarousel">
            <div className="titleContainerExperienceCarousel">
              <h1>Logiciels et outils</h1>
            </div>
            <div className="logoContainerCarousel">
              <div className="logo Left">
                <img src={VSCode} alt="Visual Studio Code" />
                <span>Visual Studio Code</span>
                <img src={Git} alt="GitHub" />
                <span>GitHub</span>
                <img src={Postman} alt="Postman" />
                <span>Postman</span>
              </div>
              <div className="logo Middle">
                <img src={Figma} alt="Figma" />
                <span>Figma</span>
                <img src={Trello} alt="Trello" />
                <span>Trello</span>
                <img src={MacOS} alt="macOS" />
                <span>macOS</span>
              </div>
              <div className="logo Right">
                <img src={Windows} alt="Windows" />
                <span>Windows</span>
                <img src={Logoist} alt="Logoist" />
                <span>Logoist</span>
                <img src={FinalCut} alt="Final Cut Pro" />
                <span>Final Cut Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselExperience;
