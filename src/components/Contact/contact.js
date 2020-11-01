import React, { Component } from 'react'
import ContactForm from './contactfrom'
import axios from 'axios'

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/React-Tutorial/themeOneContactSection"
const data = {
    "heading": "Contact Us",
    "content": "It's very easy to get in touch with us. Just use the contact form or send us an email.",
    "branch": "Head Office",
    "address": "30 Cartvale Road, Glasgow, G42 9TB, UK",
    "contact": "+61 2 8376 6284",
    "email": "hello@nodian.com",
    "phone": "07"
  };
class Contact extends Component {

    state = {
        data: {}
    }
    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data
        //         })
        //         // console.log(this.state)
        //     })
        //     .catch(err => console.log(err))
        this.setState({
            data: data
        }
        )
    }
    render() {
        return (
            <section id="contact" className="contact-us ptb-90">
                <div className="contact-us-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="section-heading">
                                    <h3>{this.state.data.heading}</h3>
                                    <p>{this.state.data.content}</p>
                                </div>
                                <div className="footer-address">
                                    <h6>{this.state.data.branch}</h6>
                                    <p>{this.state.data.address}</p>
                                    <ul>
                                        {/* <li><i className="fa fa-phone"></i> <span>Phone: {this.state.data.phone}</span></li> */}
                                        <li><i className="fa fa-envelope-o"></i> <span>Email : <a
                                            href="mailto:hello@nodian.com">{this.state.data.email}</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact