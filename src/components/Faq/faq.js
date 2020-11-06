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
        "question": "Why can't I download the app?",
        "answer": "We are currently in the closed beta stage. This means the app is not available to the public and you must be invited to be an early-access user. Leave us your email and you might get lucky."
      },
      {
        "id": 2,
        "question": "Will I have to actively engage with this app to make use of it?",
        "answer": `As a parent you have two options in how you use this app.
                    The first is passively, where you set the daily screen time limits and can then forget about the app. Only the child will have to engage with it.
                    The second is active engagement where as well as setting limits you actively set tasks and activities for your kids. Your kids see these challenges and complete them in return for more screen time.`
      },
      {
        "id": 3,
        "question": "What devices do you support?",
        "answer": "At the moment we support Android, Windows Computers and games consoles such as PS4 and Xbox. With the new PS5 and Series X supported as well. We plan to support iPhone, iPad and other devices in the future. Get in touch to tell us what you'd like to see most!"
      },
      {
        "id": 4,
        "question": "Do I have to pay extra for games console support?",
        "answer": "Yes, in order to support games consoles within our platform there is a neccessary hardware component. We charge a one time £20 fee for the device."
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