import React, { Component } from 'react'
import axios from 'axios'


let bg = "img/download-bg.jpg"
let bgCss = "no-repeat center center fixed"
let bgStyle = {
    background: 'url('+bg+')'+bgCss
}

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/React-Tutorial/themeOneDownloadSection";

class Download extends Component{

    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    initData: res.data,
                    data: res.data.data
                })
                // console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <section className="download-section" style={bgStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="download-app-text">
                            <h3>{this.state.initData.heading}</h3>
                            <p>{this.state.initData.content}</p>
                            <div className="download-app-button">
                                {this.state.data.map((item, idx) => {
                                    return(
                                        <a key={`dw_${idx}`} href="download" className={`download-btn ${item.extraaClass}`}>
                                            <span className={item.iconClass}></span>
                                            <p>
                                                <small>{item.heaing}</small>
                                                <br /> {item.category}
                                            </p>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 hidden-sm">
                        <div className="download-app-img">
                            <img src={this.state.initData.image} alt="app download" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
export default Download