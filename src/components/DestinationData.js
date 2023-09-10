import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <li>{this.props.time}</li>
          <li>{this.props.stay}</li>
          <li>{this.props.place}</li>
          <li>{this.props.todo}</li>
          <p></p>
        </div>
        <div className="image">
          <img alt="loading_image" src={this.props.img1} />
          <img alt="loading_image" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
