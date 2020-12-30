import React, { Component } from 'react'
import ContactForm          from './contactfrom'
import axios                from 'axios'
import MailchimpSubscribe   from "react-mailchimp-subscribe"
import Mailchimp            from 'react-mailchimp-form';
const url = "https://gmail.us2.list-manage.com/subscribe/post?u=5f3611d15bda0115be9f88bd4&amp;id=9bcf244908";
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/React-Tutorial/themeOneContactSection"
const data = {
    "heading": "Contact Us",
    "content": "If you'd like to get in touch with us or ask a question, please send us an email. If you'd like updates, just leave your email with us and we'll be in touch.",
    "branch": "Head Office",
    "address": "Glasgow, UK",
    "contact": "+61 2 8376 6284",
    "email": "hello@parengo.co.uk",
    "phone": "07"
  };

  const CustomForm = ({ status, message, onValidated }) => {
    let email, name, customerMessage;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value,
        MESSAGE: customerMessage.value
      });
  
    return (
      <div
        style={{
          background: "#efefef",
          borderRadius: 2,
          padding: 10,
          display: "inline-block"
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
    );
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
                            <div className="col-md-12">
                                <div className="section-heading text-center">
                                    <h3>{this.state.data.heading}</h3>
                                    <p>{this.state.data.content}</p>
                                </div>
                                <div className="footer-address text-center">
                                    {/* <h6>{this.state.data.branch}</h6>
                                    <p>{this.state.data.address}</p> */}
                                  <div className="mailchimp-subscribe-wrap">
                                    <Mailchimp
                                        action={url}

                                        //Adding multiple fields:
                                        fields={[
                                          {
                                            name       : 'EMAIL',
                                            placeholder: 'Enter your email',
                                            type       : 'email',
                                            required   : true,
                                          },
                                        ]}
                                        // Change predetermined language
                                        messages={
                                          {
                                            sending  : 'Sending...',
                                            success  : 'You\'ve subscribed!',
                                            error    : 'An unexpected internal error has occurred.',
                                            empty    : 'You must enter an e-mail address.',
                                            duplicate: 'You\'ve already subscribed.',
                                            button   : 'Subscribe',
                                          }
                                        }
                                        // Add a personalized class
                                        className='subscribeForm'
                                    />
                                  </div>
                                    {/*<ul style={{marginBottom:"40px"}}>*/}
                                    {/*    <SimpleForm></SimpleForm>*/}
                                    {/*</ul>*/}
                                    <ul>
                                        {/* <li><i className="fa fa-phone"></i> <span>Phone: {this.state.data.phone}</span></li> */}
                                        <li><i style={{marginBottom:"40px"}} className="fa fa-envelope-o"></i> <span>Email : <a
                                            href="mailto:hello@parengo.app">{this.state.data.email}</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-md-7">
                                <h6>Get updates from us</h6> */}
                                {/* <SimpleForm></SimpleForm> */}
                                {/* <ContactForm /> */}
                                {/* <MailchimpSubscribe
                                    url={url}
                                    render={({ subscribe, status, message }) => (
                                        <CustomForm
                                        status={status}
                                        message={message}
                                        onValidated={formData => subscribe(formData)}
                                        />
                                    )}
                                /> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact