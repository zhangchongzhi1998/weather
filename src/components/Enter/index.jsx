import React, { Component } from "react";
import "./index.css";
import Enterpic from "../../asset/img/Entry.png";
import { Link } from "react-router-dom";

export default class Enter extends Component {
  render() {
    return (
      <div>
        <div className="enter">
          <Link to="/weather">
            <img className="enter_pic" src={Enterpic} alt="进入" />
          </Link>
        </div>
      </div>
    );
  }
}
