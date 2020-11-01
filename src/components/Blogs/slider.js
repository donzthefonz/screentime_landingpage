import React from 'react'


let bg = "img/video-play.jpg";
let bgCss = "no-repeat center center fixed";
let bgStyle = {
    background: "url(" + bg + ")" + bgCss
};

const initData = {
    heading: "Our Blog",
    content: "Intrinsicly brand market-driven supply chains before tactical intellectual capital. Collaboratively mesh effective relationships before granular products. Holisticly."
}

class Slider extends React.Component {

    state = {
        initData: {}
    }
    componentDidMount() {
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <div>
                <section className="breadcrumb-section" style={bgStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center breadcrumb-content">
                                    <h2>{this.state.initData.heading}</h2>
                                    <p>{this.state.initData.content}</p>
                                    <ul className="breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Slider;