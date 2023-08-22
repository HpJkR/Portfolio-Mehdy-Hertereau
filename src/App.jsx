import { Element, Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import './App.scss';
import './index.scss';

import CardsExperience from './components/cardExperience';
import Carousel  from './components/carousel';
import Home from './components/home';
import NavBar from './components/navbar';
import Presentation from './components/presentation';
import Projets from './components/projets2';
import Contact from './components/contact';
import Footer from './components/footer';

import Fleche from './assets/img/fleche-vers-le-haut.png'


function App() {
    const isMobile = useMediaQuery({ maxWidth: 780 });
    return (
        <>
            <div className='generalContainer'>
            <div className='navbarGestion'>
                    <NavBar />
                </div>
                <main className='main'>
                <Element name='accueil'>
                    <Home />
                </Element>
                <Element name='presentation'>
                    <Presentation />
                </Element>
                <div className='cardsExperienceGestion'>
                    {isMobile ? (
                        <Carousel />
                    ) : (
                        <CardsExperience />
                    )}
                </div>
                <Element name='projets'>
                    <Projets />
                </Element>
                <Element name='contact'>
                    <Contact />
                </Element>
                <ScrollLink to='accueil' smooth={true} duration={500} id='scrollLink'>
                    <img id='imgScroll' src={Fleche} alt="" />
                </ScrollLink>
                <Footer />
                </main>
            </div>
        </>
    );
}

export default App;
