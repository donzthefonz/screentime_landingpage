import React from "react";
import {appName} from '../../constants'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Mailchimp from 'react-mailchimp-form'

const url = "https://gmail.us2.list-manage.com/subscribe/post?u=5f3611d15bda0115be9f88bd4&amp;id=9bcf244908";
const SimpleForm = () => <MailchimpSubscribe url={url}/>


let bg = "/img/hero-section-bg-2.jpg";
let bgCss = "no-repeat center center / cover";
let bgStyle = {
  background: "url(" + bg + ")" + bgCss
};

let initData = {
  heading: "ApeTech Provide -",
  content:
    "Our software platform and custom development allow healthcare institutions to create comprehensive cross-platform solutions that ensure positive patient experiences.",
  heroImage: "/img/kids_group_3.png",
  actionShapeImage: "/img/shape-bg-custom.png"
};

let slider_action_data = [
    {
      link: "apple",
      btnClass: "btn softo-solid-btn",
      faClass: "fa fa-apple",
      value: "Appstore"
    },
    {
      link: "android",
      btnClass: "btn btn-icon",
      faClass: "fa fa-android",
      value: ""
    },
    {
      link: "windows",
      btnClass: "btn btn-icon",
      faClass: "fa fa-windows",
      value: ""
    }
  ];

class HeroSection extends React.Component {

    state = {
        initData: {},
        sliderData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            sliderData: slider_action_data
        })
    }
    render() {
        return (
            <div>
                <section id="hero" className="section-lg section-hero hero-slider-section-one" style={bgStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="hero-content-wrap">
                                    <div className="hero-content typed-strings">
                                      {/*<img src={"/img/parengo_logo.png"} alt="logo" style={{maxWidth: '400px'}}/>*/}
                                        <h1> Parenting just got easier.<br /> </h1>
                                      <p>
                                        Manage your child’s screen time and incentivise positive behaviour. <br/> Like a parental control app, but better!
                                      </p>

                                      <p style={{paddingBottom: 0}}>
                                        Be notified as soon as we launch!
                                      </p>

                                          <Mailchimp
                                              action={url}

                                              //Adding multiple fields:
                                              fields={[
                                                {
                                                  name: 'EMAIL',
                                                  placeholder: 'Email',
                                                  type: 'email',
                                                  required: true
                                                }
                                              ]}
                                              // Change predetermined language
                                              messages = {
                                                {
                                                  sending: "Sending...",
                                                  success: "You've subscribed!",
                                                  error: "An unexpected internal error has occurred.",
                                                  empty: "You must enter an e-mail address.",
                                                  duplicate: "You've already subscribed.",
                                                  button: "Subscribe!"
                                                }
                                              }
                                              // Add a personalized class
                                              className='subscribeForm'
                                          />
                                      {/*<div className="slider-action-btn">*/}
                                      {/*      {this.state.sliderData.map((item, idx) => {*/}
                                      {/*          return(*/}
                                      {/*              <a key={`sl_${idx}`} href={item.link} className="btn btn-icon">*/}
                                      {/*                  <i className={item.faClass}></i>*/}
                                      {/*              </a>*/}
                                      {/*          )*/}
                                      {/*      })}*/}
                                      {/*  </div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div >
                                    <img src={this.state.initData.heroImage} alt="" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-shape">
                        <img src={this.state.initData.actionShapeImage} alt="" />
                    </div>
                </section>
            </div>
        );
  }
}

export default HeroSection;
