import mehdy from "../assets/img/mehdyDetouré.png";

function Presentation() {
  return (
    <div className="mainContainerPres">
      <div className="insideContainerPres">
        <div className="imgMehdy">
          <img src={mehdy} alt="photo de profil" />
        </div>
        <div className="textPres">
          <p>
            {
              "Après une expérience de plus de 10 ans dans le commerce, j’ai décidé de me reconvertir dans le développement web. Créatif et ambitieux, j'ai toujours aimé comprendre et résoudre des problèmes techniques. Passionné par les nouvelles technologies, j'aime me tenir informé des évolutions du marché."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
