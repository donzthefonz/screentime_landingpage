import React, { Component } from "react"
import axios from 'axios'

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOneFaqSection";
class Faq extends Component {

    state = {
        initData: {},
        data: []
    }

    componentDidMount() {
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

    render() {
        return (
            <div>
                <section id="faqs" class="faq-section ptb-90">
                    <div class="faq-section-wrap">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="faq-img">
                                        <img src={this.state.initData.image} className="img-responsive" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="section-heading">
                                        <h3>{this.state.initData.heading}</h3>
                                        <p>{this.state.initData.content}</p>
                                    </div>
                                    <div class="panel-group" id="accordion">
                                        {this.state.data.map((item, idx) => {
                                            return (
                                                <div key={`fq_${idx}`} class="panel panel-default">
                                                    <div class="panel-heading" id="headingOne">
                                                        <h4 class="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="collapsed">
                                                                {item.question}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne" class="panel-collapse collapse">
                                                        <div class="panel-body">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {/* End Single Item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Faq;