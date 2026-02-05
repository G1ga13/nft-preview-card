import "./App.css";
import nft from "./assets/images/nft.png";
import Price from "./components/nft_price/Price";
import Time from "./components/time/Time";
import creator from "./assets/images/creator.png";
import eye from "./assets/images/eye.png";

function App() {
  return (
    <div className="main_container">
      <div className="nft_image">
        <img className="main_nft_image" src={nft} alt="nft" />
        <div className="over_color"></div>
        <img className="eye_icon" src={eye} alt="eye" />
      </div>
      <div className="container_text">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
      <div className="price_time">
        <Price />
        <Time />
      </div>
      <hr />
      <footer>
        <img src={creator} alt="creator" />
        <p>
          Creation of<span> Jules Wyvern</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
