import "./App.css";
import nft from "./assets/images/nft.png";

function App() {
  return (
    <div className="main_container">
      <div className="nft_image">
        <img src={nft} alt="nft" />
      </div>
      <div className="container_text">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
    </div>
  );
}

export default App;
