import { useState } from 'react';
import './cardExperience.scss';

import Formation from '../assets/img/education.png'
import Experience from '../assets/img/experience-utilisateur (2).png'
import Competences from '../assets/img/langage-de-codage (2).png'
import HTML from '../assets/img/testHtml.png';
import CSS from '../assets/img/testCSS.png';
import JS from '../assets/img/testJS.png';
import Node from '../assets/img/testNode.png';
import React from '../assets/img/testReact.png';
import Express from '../assets/img/testExpress.png';
import Sql from '../assets/img/testSql.png';
import GitHub from '../assets/img/testGitHub.png';
import Dom from '../assets/img/testDom.png';
import VSCode from '../assets/img/vsCode.png'
import Git from '../assets/img/github2.png'
import Postman from '../assets/img/postman.png'
import Figma from '../assets/img/figma.png'
import Trello from '../assets/img/trello.png'
import MacOS from '../assets/img/macOS.png'
import Windows from '../assets/img/windows.png'
import Logoist from '../assets/img/logoist.png'
import FinalCut from '../assets/img/finalCut.png'

const CardsExperience = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [containerExpanded, setContainerExpanded] = useState(false); // Ajout de l'état pour le conteneur

    const handleExpand = (cardNumber) => {
        if (expandedCard === cardNumber) {
            setExpandedCard(null);
            setContainerExpanded(false); // Si on reclique sur la carte ouverte, on ferme toutes les cartes
        } else {
            setExpandedCard(cardNumber);
            setContainerExpanded(true); // Passer en mode colonne pour toutes les cartes
        }
    };

    return (
        <div className={`cardsExperienceContainer ${containerExpanded ? 'expanded' : ''}`}>
            <div className={`cardsExperience ${expandedCard === 1 ? 'expanded' : ''}`} onClick={() => handleExpand(1)}>
                <div className='titleExperience'>
                <h1 id='titleExperience'>EXPÉRIENCE</h1>
                </div>
                <div className='imgExperience'>
                <img src={Experience} alt="" />
                </div>
                {expandedCard === 1 && (
                    <div className="additionalContent">
                        <div className='experienceContainer'>
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
                )}
            </div>
            <div className={`cardsExperience ${expandedCard === 2 ? 'expanded' : ''}`} onClick={() => handleExpand(2)}>
                <div className='titleExperience'>
                <h1 id='titleExperience'>FORMATIONS</h1>
                </div>
                <div className='imgExperience'>
                <img src={Formation} alt="" />
                </div>
                {expandedCard === 2 && (
                    <div className="additionalContent">
                        <div className='experienceContainer'>
                            <div>
                                <span>Estiam - Octobre 2023 à Septembre 2024</span>
                                <p><strong>3eme année Data & Application Développement</strong><br />Développement des applications mobiles, Java, C#, Angular, Node.JS, Business intelligence, Méthode agile, Administration OS Serveur</p>
                            </div>
                            <div>
                                <span>Wild Code School Lyon - Mai 2023 à Octobre 2023</span>
                                <p><strong>Formation développeur Web et Web mobile</strong><br />HTML, CSS, JavaScript, DOM, React, Express (NodeJS), SQL</p>
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
                )}
            </div>
            <div className={`cardsExperience ${expandedCard === 3 ? 'expanded' : ''}`} onClick={() => handleExpand(3)}>
                <div className='titleExperience'>
                <h1 id='titleExperience'>COMPÉTENCES</h1>
                </div>
                <div className='imgExperience'>
                <img src={Competences} alt="" />
                </div>
                {expandedCard === 3 && (
                    <div className="additionalContent">
                        <div className='logoMajorContainer'>
                            <div className='titleContainerExperience'>
                            <h1>Languages / Frameworks</h1>
                            </div>  
                        <div className='logoContainer'>
                            <div className='logo Left'>
                                <img src={HTML} alt="" />
                                <span>HTML</span>
                                <img src={CSS} alt="" />
                                <span>CSS</span>
                                <img src={JS} alt="" />
                                <span>JavaScript</span>
                            </div>
                            <div className='logo Middle'>
                                <img src={Node} alt="" />
                                <span>Node</span>
                                <img src={React} alt="" />
                                <span>React</span>
                                <img src={Express} alt="" />
                                <span>Express</span>
                            </div>
                            <div className='logo Right'>
                                <img src={Sql} alt="" />
                                <span>Sql</span>
                                <img src={GitHub} alt="" />
                                <span>Git</span>
                                <img src={Dom} alt="" />
                                <span>Dom</span>
                            </div>
                        </div>
                        </div>
                        <div className='logoMajorContainer'>
                            <div className='titleContainerExperience'>
                            <h1>Logiciels et outils</h1>
                            </div>  
                        <div className='logoContainer'>
                            <div className='logo Left'>
                                <img src={VSCode} alt="" />
                                <span>Vs Code</span>
                                <img src={Git} alt="" />
                                <span>GitHub</span>
                                <img src={Postman} alt="" />
                                <span>Postman</span>
                            </div>
                            <div className='logo Middle'>
                                <img src={Figma} alt="" />
                                <span>Figma</span>
                                <img src={Trello} alt="" />
                                <span>Trello</span>
                                <img src={MacOS} alt="" />
                                <span>MacOS</span>
                            </div>
                            <div className='logo Right'>
                                <img src={Windows} alt="" />
                                <span>Windows</span>
                                <img src={Logoist} alt="" />
                                <span>Logoist</span>
                                <img src={FinalCut} alt="" />
                                <span>Final Cut Pro</span>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardsExperience;
