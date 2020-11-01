import React from "react";

let bg = "/img/hero-bg2.jpg"
let bgCss = "no-repeat center center / cover"
let bgStyle = {
    background: 'url('+bg+')'+bgCss
}

let initData = {
  heading: "Awesome App Landing Page",
  content: "Our software platform and custom development allow healthcare institutions to create comprehensive cross-platform solutions that ensure positive patient experiences.",
  image: "/img/waves-shape.svg",
  sliderImage: "/img/iphone-x-frame.png",
}
let slider_action_data = [
  {
    link: "apple",
    btnClass: "btn softo-solid-btn",
    faClass: "fa fa-apple",
    value: "Appstore"
  },
  {
    link: "android",
    btnClass: "btn btn-icon",
    faClass: "fa fa-android",
    value: ""
  },
  {
    link: "windows",
    btnClass: "btn btn-icon",
    faClass: "fa fa-windows",
    value: ""
  }
];
let phoneImage = [
  { image: "/img/top-screen-1.png" },
  { image: "/img/top-screen-5.png" },
  { image: "/img/top-screen-2.png" },
  { image: "/img/top-screen-6.png" },
  { image: "/img/top-screen-3.png" },
  { image: "/img/top-screen-7.png" },
  { image: "/img/top-screen-8.png" }
];

class HeroSection extends React.Component {
  // noinspection JSAnnotator
  state = {
    initData: {},
    sliderData: [],
    phoneImage: []
  };
  componentDidMount() {

    // you can do this by make a api call
    // axios
    //   .get(`${URL}`)
    //   .then(res => {
    //     this.setState({
    //       initData ....
    //     });
    //     // console.log(this.state.sliderData);
    //   })
    //   .catch(err => console.log(err));

    this.setState({
      initData: initData,
      sliderData: slider_action_data,
      phoneImage: phoneImage
    })
  }

  render() {
    return (
      <div>
        {/* start hero section */}
        {/* start slider section */}
        <section id="hero" className="hero-content hero-slider-section-one section-lg" style={bgStyle}>
          <div className="hero-slider-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="hero-content-wrap">
                    <div className="hero-content">
                      <h1>{this.state.initData.heading}</h1>
                      <p>{this.state.initData.content}</p>
                      <div className="slider-action-btn">
                        {this.state.sliderData.map((data, idx) => {
                          return (
                            <a key={`sk_${idx}`} href={data.link} className={data.btnClass}>
                              <i className={data.faClass}></i>{data.value}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mobile-slider-area">
                    <div className="phone">
                      <img src={this.state.initData.sliderImage} alt="" className="img-responsive" />
                      <div className="mobile-slider owl-carousel owl-theme">
                        {this.state.phoneImage.map((item, idx) => {
                          return (
                            <div key={`pi_${idx}`} className="item">
                              <img src={item.image} alt="" className="img-responsive" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="slider-indicator">
                      <ul>
                        <li id="prev">
                          <i className="fa fa-angle-left"></i>
                        </li>
                        <li id="next">
                          <i className="fa fa-angle-right"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-shape">
            <div className="river-wave"></div>
            <div className="river-wave"></div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    );
  }
}

export default HeroSection;
