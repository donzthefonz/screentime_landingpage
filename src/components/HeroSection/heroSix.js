import React from 'react'

let bg = "/img/hero-section-bg-3.jpg";
let bgCss = "no-repeat center center / cover";
let bgStyle = {
    background: "url(" + bg + ")" + bgCss
};

const initData = [
    {
        "id": 1,
        heading: "Business Solution For Startup",
        content: "Objectively customize sustainable platforms through integrated resources. Appropriately target state of the art outsourcing vis-a-vis bleeding-edge ROI.",
        image: "/img/tab-image-2.png"
    },
    {
        "id": 2,
        heading: "Enterprise Software Development",
        content: "Dynamically integrate intuitive customer service via cross-media infrastructures. Quickly deliver value-added scenarios after collaborative portals.",
        image: "/img/tab-image-2.png"
    },
    {
        "id": 3,
        heading: "Marketing and Business Solution",
        content: "Completely morph efficient technology and B2C bandwidth. Uniquely leverage other's market positioning relationships rather than future-proof supply chains.",
        image: "/img/tab-image-2.png"
    }
]


class HeroSection extends React.Component {

    state = {
        sliderData: [],
        actionData: []
    }
    componentDidMount() {
        this.setState({
            sliderData: initData,
            actionData: initData.action
        })
        // console.log(this.state)
    }
    render() {
        return (
            <div>
                <section id="hero-section" className="hero-slider-section hero-slider-section-one" style={bgStyle}>
                    <div className="container">
                        <div className="owl-carousel owl-theme hero-background-slider custom-indicator">
                            {this.state.sliderData.map((item, idx) => {
                                return (
                                    <div key={`sl_${idx}`} className="item slider-bg-content">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="hero-content">
                                                    <h1>{item.heading}</h1>
                                                    <p>{item.content}</p>
                                                </div>
                                                <div className="hero-action-btn">
                                                    <a href="apple" className="btn softo-solid-btn"><i className="fa fa-apple"></i> Appstore</a>
                                                    <a href="android" className="btn softo-solid-btn"><i className="fa fa-android"></i> Android</a>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="hero-image">
                                                    <img src={item.image} alt="" className="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="section-shape">
                        <img src="/img/waves-shape.svg" alt="" />
                    </div>
                </section>
            </div>
        );
    }
}
export default HeroSection;