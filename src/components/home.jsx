import PropTypes from 'prop-types';


import feuille from "../assets/img/feuille.jpg";
import goutteEau from "../assets/img/goutteEau.png";
import polygon from "../assets/polygon.png";

function Home({ isShifted }) {
  
  const containerStyles = {
    transform: isShifted ? 'scale(0.5) translate(-40%, 0%) skew(0deg, -18deg)' : 'translate(0, 0)',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '-50px -26px 21px 9px rgba(255, 255, 255, 0.06)'
  };


  return (
    <div className="container" style={containerStyles}>
      <div className="feuille">
        <img src={feuille} alt="feuille" />
      </div>
      <div className="polygon">
        <img src={polygon} alt="polygon" />
      </div>
      <div className="goutte">
        <img src={goutteEau} alt="goutte d'eau" />
      </div>
      <div className="prenomContainer" >
        <div className="mehdyH">
          <span className="span1">
            <span id="word_Mehdy">Mehdy</span>
            <br />
            <span id="word_Hertereau">Hertereau</span>
          </span>
        </div>
        <div id="line"></div>
        <div className="metierContainer">
          <div id="span2">Développeur web </div>
        </div>
      </div>
    </div>
  );
}
Home.propTypes = {
  isShifted: PropTypes.bool.isRequired
};

export default Home;
