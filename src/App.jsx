import "./App.css";
import equilibrium from "/images/image-equilibrium.jpg";
import ethereum from "/images/icon-ethereum.svg";
import clock from "/images/icon-clock.svg";
import avatar from "/images/image-avatar.png";

function App() {
  return (
    <div className="container">
      <img src={equilibrium} className="equilibrium" alt="equilibrium" />
      <h1>Equilibrium #3429</h1>
      <p className="equilibrium-text">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="info-container">
        <div className="info eth">
          <img src={ethereum} alt="ethereum" className="ethereum" />
          <span>0.041 ETH</span>
        </div>
        <div className="info clock">
          <img src={clock} alt="clock" className="clock" />
          <span>3 days left</span>
        </div>
      </div>
      <div className="author">
        <img src={avatar} alt="avatar" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default App;
