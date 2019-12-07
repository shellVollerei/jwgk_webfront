import React from "react";
import { Carousel } from "antd";
import "./less/carousel.less";

class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    };
  }

  render() {
    return (
      <Carousel autoplay className="my_carousel">
        <div>
          <div className="img">1</div>
        </div>
        <div>
        <div className="img">2</div>
        </div>
        <div>
        <div className="img">3</div>
        </div>
        <div>
        <div className="img">4</div>
        </div>
      </Carousel>
    );
  }
}
export default MyCarousel;
