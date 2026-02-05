import "../time/Time.css";
import watch from "../../assets/images/watch.svg";

function Time() {
  return (
    <div className="time_container">
      <img src={watch} alt="watch" />
      <p>3 days left</p>
    </div>
  );
}

export default Time;
