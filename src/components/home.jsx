import feuille from "../assets/img/feuille.jpg";
import goutteEau from "../assets/img/goutteEau.png";
import polygon from "../assets/polygon.png";

function Home() {
  return (
    <div className="container">
      <div className="feuille">
        <img src={feuille} alt="feuille" />
      </div>
      <div className="polygon">
        <img src={polygon} alt="polygon" />
      </div>
      <div className="goutte">
        <img src={goutteEau} alt="goutte d'eau" />
      </div>
      <div className="prenomContainer">
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

export default Home;
