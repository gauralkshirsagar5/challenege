import "./DestinationStyles.css";
import { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className="first-des">
        <div className="des-text">
          <h2>{this.props.heading}</h2>

          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_X0pov4Wg80MWrjIadgcZSHjcYm3beoptg&usqp=CAU"
          />

          <img
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B_y0nNKIR83HQt4Y1lsdA_tjs50VcGqZvztE-pz0F57T3IozsEfhNgpA4xKPjrN5tYs&usqp=CAU"
          />
        </div>
      </div>
    );
  }
}
export default DestinationData;
