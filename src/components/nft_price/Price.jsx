import "./Price.css";
import ethLogo from "../../assets/images/ETH_logo.svg";

function Price() {
  return (
    <div className="price_container">
      <img src={ethLogo} alt="ETH logo" />
      <p className="cost">0.041 ETH</p>
    </div>
  );
}

export default Price;
