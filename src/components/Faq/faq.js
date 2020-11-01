import React, { Component } from "react"
import axios from 'axios'

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOneFaqSection";


const data = {
    "heading": "Faq's",
    "content": "Some commonly asked questions. If something isn't here and you're curious, please get in touch!",
    "image": "/img/faq-right.png",
    "data": [
      {
        "id": 1,
        "question": "Is this an awesome app?",
        "answer": "Yes."
      },
      {
        "id": 2,
        "question": "User Interface Design ?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.,"
      },
      {
        "id": 3,
        "question": "Cross Browser Support ?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.,"
      },
      {
        "id": 4,
        "question": "User Experience Design ?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.,"
      }
    ]
  }
class Faq extends Component{

    state = {
        initData: {},
        data: []
    }

    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             initData: res.data,
        //             data: res.data.data
        //         })
        //         // console.log(this.state)
        //     })
        //     .catch(err => console.log(err))
        this.setState({
            initData: data,
            data: data.data
                  })
    }

    render(){
        return(
            <section id="faqs" className="faq-section ptb-90">
            <div className="faq-section-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-heading">
                                <h3>{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                            <div className="panel-group" id="accordion">
                                {/* Start Single Item */}
                                {this.state.data.map((item, idx) => {
                                  return(
                                    <div key={`faq_${idx}`} className="panel panel-default">
                                        <div className="panel-heading" id={`heading_${idx}`}>
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href={`#collapse_${idx}`} className="collapsed">
                                                    {item.question}
                                                </a>
                                            </h4>
                                        </div>
                                        <div id={`collapse_${idx}`} className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                  )  
                                })}
                                
                                {/* End Single Item */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="faq-img">
                                <img src={this.state.initData.image} className="img-responsive" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default Faq;