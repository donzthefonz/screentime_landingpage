import React from "react";
import axios from 'axios'

let bg = "/img/video-play.jpg"
let bgCss = "no-repeat center center fixed"
let bgStyle = {
    background: 'url(' + bg + ')' + bgCss
}

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/React-Tutorial/themeThreeFeatureSection";
class Feature extends React.Component {

    state = {
        initData: {},
        featureData: []
    }
    componentDidMount() {
        // getting data from server
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    initData: res.data,
                    featureData: res.data.featureData
                })
                // console.log(this.state)
            })
    }
    render() {
        return (
            <div>
                <section id="features" className="overview-section ptb-90" style={bgStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading text-center white-text overview-heading">
                                    <h3 className="white-text">{this.state.initData.heading}</h3>
                                    <p>{this.state.initData.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="nav-center overview-center-tab">
                                    <ul className="nav nav-tabs">
                                        {this.state.featureData.map((item, idx) => {
                                            return (
                                                <li key={`fa_${idx}`} className={`${item.id === 1 ? 'active' : ''}`}><a href={`#nav-${idx + 1}`} data-toggle="tab">
                                                    <span className="ti-apple"></span>
                                                    {item.featureName}
                                                </a></li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="tab-content-wrap">
                                    <div className="tab-content clearfix">
                                        {this.state.featureData.map((item, idx) => {
                                            if (item.id % 2 === 1) {
                                                return (
                                                    <div key={`fe_${idx}`} className={`tab-pane fade ${item.id === 1 ? 'active in' : ''}`} id={`nav-${idx + 1}`}>
                                                        <div className="col-md-6">
                                                            <div className="overview-feature-content-image">
                                                                <img src={item.featureImage} alt="" className="img-responsive" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="overview-feature-content">
                                                                <h6>{item.featureHeading}</h6>
                                                                <p>{item.content}</p>
                                                                <ul className="overview-list">
                                                                    <li><span className="ti-vector"></span>{item.ul_1}</li>
                                                                    <li><span className="ti-bar-chart"></span>{item.ul_2}</li>
                                                                    <li><span className="ti-headphone-alt"></span>{item.ul_3}</li>
                                                                    <li><span className="ti-cup"></span>{item.ul_4}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }else{
                                                return(
                                                    <div key={`fe_${idx}`} className={`tab-pane fade ${item.id === 1 ? 'active in' : ''}`} id={`nav-${idx + 1}`}>
                                                        <div className="col-md-6">
                                                            <div className="overview-feature-content">
                                                                <h6>{item.featureHeading}</h6>
                                                                <p>{item.content}</p>
                                                                <ul className="overview-list">
                                                                    <li><span className="ti-vector"></span>{item.ul_1}</li>
                                                                    <li><span className="ti-bar-chart"></span>{item.ul_2}</li>
                                                                    <li><span className="ti-headphone-alt"></span>{item.ul_3}</li>
                                                                    <li><span className="ti-cup"></span>{item.ul_4}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="overview-feature-content-image">
                                                                <img src={item.featureImage} alt="" className="img-responsive" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-shape">
                        <img src={this.props.shapeImage} alt="" />
                    </div>
                </section>
            </div>
        )
    }
}
export default Feature