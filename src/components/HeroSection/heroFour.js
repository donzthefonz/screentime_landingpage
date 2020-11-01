import React from "react";

let bg = "/img/hero-section-bg-2.jpg";
let bgCss = "no-repeat center center / cover";
let bgStyle = {
  background: "url(" + bg + ")" + bgCss
};

let initData = {
  heading: "ApeTech Provide -",
  content:
    "Our software platform and custom development allow healthcare institutions to create comprehensive cross-platform solutions that ensure positive patient experiences.",
  heroImage: "/img/faq-right.png",
  actionShapeImage: "/img/shape-bg.png"
};

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

    state = {
        initData: {},
        sliderData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            sliderData: slider_action_data
        })
    }
    render() {
        return (
            <div>
                <section id="hero" className="section-lg section-hero hero-slider-section-one" style={bgStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="hero-content-wrap">
                                    <div className="hero-content typed-strings">
                                        <h1> {this.state.initData.heading}<br /> <span className="typed"></span> </h1>
                                        <p>{this.state.initData.content}</p>
                                        <div className="slider-action-btn">
                                            {this.state.sliderData.map((item, idx) => {
                                                return(
                                                    <a key={`sl_${idx}`} href={item.link} className="btn btn-icon">
                                                        <i className={item.faClass}></i>
                                                    </a>
                                                )
                                            })}
                                            <a href="https://www.youtube.com/watch?v=LV3cjaA7NtE" className="video">
                                                <span className="ti-control-play"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-image">
                                    <img src={this.state.initData.heroImage} alt="" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-shape">
                        <img src={this.state.initData.actionShapeImage} alt="" />
                    </div>
                </section>
            </div>
        );
  }
}

export default HeroSection;
