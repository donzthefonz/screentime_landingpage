import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/React-Tutorial/themeOneFooterSection";

class Footer extends Component{

    state = {
        data: [],
        initData: {}
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data.socialMedia,
                    initData: res.data
                })
                // console.log(this.state)
            })
    }

    render(){
        return(
            <footer className="footer-section bg-secondary ptb-60">
            <div className="footer-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="footer-single-col text-center">
                                <img src={this.state.initData.image} alt="" />
                                <div className="footer-social-list">
                                    <ul className="list-inline">
                                        {this.state.data.map((item, idx) =>{
                                            return <li key={`fo_${idx}`}><a href={item.link}> <i className={item.iconClass}></i></a></li>
                                        })}
                                    </ul>
                                </div>
                                <div className="copyright-text">
                                    <p>&copy; copyright <a href="apetech">ApeTech</a> Software Template By <a
                                            href="https://themeforest.net/user/htmllover/portfolio" target="_blank" rel="noopener noreferrer">HtmlLover</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer