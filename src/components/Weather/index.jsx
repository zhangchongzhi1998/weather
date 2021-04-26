import React, { Component } from "react";
import "./index.css";
import Refresh from "../../asset/img/refresh.png";
import left from "../../asset/img/leftArrow.png";
import right from "../../asset/img/rightArrow.png";
import { Carousel, Row, Col } from "antd";

export default class index extends Component {
  state = {
    citys: [
      { id: 1, name: "悉尼" },
      { id: 2, name: "墨尔本" },
      { id: 3, name: "北京" },
    ],
  };
  goToLeft = () => {
    const { imgChange } = this;
    imgChange.prev();
  };
  goToRight = () => {
    const { imgChange } = this;
    imgChange.next();
  };

  render() {
    const { citys } = this.state;
    return (
      <div className="weather">
        <div className="weather_list">
          <Row>
            <Col span={6}>
              <img
                className="go_left"
                onClick={this.goToLeft}
                src={left}
                alt=""
              />
            </Col>
            <Col span={12}>
              <Carousel
                easing="default"
                dots={false}
                ref={(a) => {
                  this.imgChange = a;
                }}
              >
                {citys.map((city) => {
                  return (
                    <div className="carousel" key={city.id}>
                      <h3
                        style={{
                          textAlign: "center",
                          marginBottom: "40px",
                          fontSize: "22px",
                          color: "white",
                        }}
                      >
                        {city.name}
                      </h3>
                      <img
                        style={{
                          margin: "0 auto",
                        }}
                        className="refresh"
                        src={Refresh}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </Col>
            <Col span={6}>
              <img
                className="go_right"
                onClick={this.goToRight}
                src={right}
                alt=""
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
