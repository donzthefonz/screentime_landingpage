import React from "react";

let bg = "/img/hero-section-bg-3.jpg"
let bgCss = "no-repeat center center / cover"
let bgStyle = {
  background: 'url(' + bg + ')' + bgCss
}

let initData = {
  heading: "Awesome App Landing Page",
  content: "Our software platform and custom development allow healthcare institutions to create comprehensive cross-platform solutions that ensure positive patient experiences.",
  image: "/img/waves-shape.svg",
  sliderImage: "/img/app-hand-top.png",
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

class HeroSection extends React.Component {
  // noinspection JSAnnotator
  state = {
    initData: {},
    sliderData: []
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
      sliderData: slider_action_data
    })
  }

  render() {
    return (
      <div>
        {/* start hero section */}
        {/* start slider section */}
        <section id="hero" className="pt-100 hero-slider-section-one section-circle" style={bgStyle}>
          {/* background circle shape */}
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hero-content-wrap hero-content-wrap-1">
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
              <div className="col-md-6">
                <div className="hero-image bottom-absulate">
                  <img src={this.state.initData.sliderImage} alt="" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
          <div className="section-shape">
            <img src={this.props.shapeImage} alt="" />
          </div>
        </section>
        {/* end slider section */}
      </div>
    );
  }
}

export default HeroSection;
