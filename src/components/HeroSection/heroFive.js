import React from 'react'

let bg = "/img/slider.jpg";
let bgCss = "no-repeat center center / cover";
let bgStyle = {
  background: "url(" + bg + ")" + bgCss
};

let initData = {
  heading: "ApeTech Awesome App for Your Modern Lifestyle",
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

  
class HeroSection extends React.Component{

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

    render(){
        return(
            <div>
            {/* start slider background video section */}
        <div id="hero-section" style={bgStyle}>
            <div className="hero-background-video">
                <div className="video-section-wrap-two">
                    <div className="pattern-overlay">
                        <div className="player"
                             data-property="{videoURL:'https://www.youtube.com/watch?v=LV3cjaA7NtE',containment:'.video-section-wrap-two', quality:'highres', autoPlay:true, showControls: false, startAt:8, mute:true, opacity: 1}"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="hero-content text-center">
                                        <h1>{this.state.initData.heading}</h1>
                                        <p>{this.state.initData.content}</p>
                                        <div className="slider-action-btn">
                                            {this.state.sliderData.map((item, idx) => {
                                                return(
                                                    <a key={`h_${idx}`} href={item.link} className="btn btn-icon"><i className={item.faClass}></i></a>
                                                )
                                            })}
{/*                                             
                                            <a href="#" className="btn btn-icon"><i className="fa fa-android"></i></a>
                                            <a href="#" className="btn btn-icon"><i className="fa fa-windows"></i></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end slider background video section */}
            </div>
        );
    }
}
export default HeroSection;