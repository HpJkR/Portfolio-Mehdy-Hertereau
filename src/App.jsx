import { Element, Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import './App.scss';

import CardsExperience from './components/cardExperience';
import Home from './components/home';
import NavBar from './components/navbar';
import Presentation from './components/presentation';
import Projets from './components/projets2';
import Contact from './components/contact';
import Carousel from './components/carousel';
import Footer from './components/footer';

import Fleche from './assets/img/fleche-vers-le-haut.png'


function App() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <>
            <div className='generalContainer'>
                <div className='navbarGestion'>
                    <NavBar />
                </div>
                <Element name='accueil'>
                    <Home />
                </Element>
                <Element name='presentation'>
                    <Presentation />
                </Element>
                {isMobile ? (
                    <Carousel />
                ) : (
                    <CardsExperience />
                )}
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
            </div>
        </>
    );
}

export default App;
