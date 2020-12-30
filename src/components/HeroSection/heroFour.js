import React                from 'react';
import {appName}            from '../../constants';
import MailchimpSubscribe   from 'react-mailchimp-subscribe';
import Mailchimp            from 'react-mailchimp-form';
import Icon                 from '@mdi/react';
import {mdiMicrosoftXbox}   from '@mdi/js';
import {mdiSonyPlaystation} from '@mdi/js';
import {mdiTelevision}      from '@mdi/js';
import { mdiAndroid } from '@mdi/js';
import { mdiMicrosoftWindows } from '@mdi/js';
import { mdiCellphoneIphone } from '@mdi/js';
const url = 'https://gmail.us2.list-manage.com/subscribe/post?u=5f3611d15bda0115be9f88bd4&amp;id=9bcf244908';
const SimpleForm = () => <MailchimpSubscribe url={url}/>;

let initData = {
  heading         : 'ApeTech Provide -',
  content         :
      'Our software platform and custom development allow healthcare institutions to create comprehensive cross-platform solutions that ensure positive patient experiences.',
  heroImage       : '/img/kids_group_3.png',
  actionShapeImage: '/img/shape-bg-custom.png',
};

let slider_action_data = [
  {
    link    : 'android',
    btnClass: 'btn btn-icon',
    faClass : 'fa fa-android',
    value   : '',
  },
  {
    link    : 'windows',
    btnClass: 'btn btn-icon',
    faClass : 'fa fa-windows',
    value   : '',
  },
];

class HeroSection extends React.Component {

  state = {
    initData  : {},
    sliderData: [],
  };

  componentDidMount() {
    this.setState({
      initData  : initData,
      sliderData: slider_action_data,
    });
  }

  render() {
    let isMobile = window.matchMedia('(max-width: 600px)').matches;
    let buttonText = isMobile ? 'GO' : 'GET EARLY ACCESS!';
    return (
        <div>
          <section id="hero"
                   className="section-lg section-hero hero-slider-section-one"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="hero-content-wrap">
                    <div className="hero-content typed-strings">
                      {/*<img src={"/img/parengo_logo.png"} alt="logo" style={{maxWidth: '400px'}}/>*/}
                      <h2> Parenting just got easier.</h2>
                      <p>
                        Manage your child’s screen time and incentivise positive
                        behaviour. Like a parental control app,
                        but <u>better</u>!
                      </p>


                      <div className="slider-action-btn">
                        {/*{this.state.sliderData.map((item, idx) => {*/}
                        {/*  return (*/}
                        {/*      <a key={`sl_${idx}`} href={item.link}*/}
                        {/*         className="btn btn-icon">*/}
                        {/*        <i className={item.faClass}></i>*/}
                        {/*      </a>*/}
                        {/*  );*/}
                        {/*})}*/}

                          <a className="btn btn-icon" style={{cursor:"default"}}>
                            <Icon path={mdiCellphoneIphone}
                                  size={1.5}
                                  color="white"
                            />
                          </a>
                        <a className="btn btn-icon" style={{cursor:"default"}}>
                            <Icon path={mdiMicrosoftWindows}
                                  size={1.5}
                                  color="white"
                            />
                          </a>
                        <a className="btn btn-icon" style={{cursor:"default"}}>
                            <Icon path={mdiMicrosoftXbox}
                                  size={1.5}
                                  color="white"
                            />
                          </a>
                        <a className="btn btn-icon" style={{cursor:"default"}}>
                            <Icon path={mdiSonyPlaystation}
                                  size={1.5}
                                  color="white"
                            />
                          </a>
                        <a className="btn btn-icon" style={{cursor:"default"}}>
                            <Icon path={mdiTelevision}
                                  size={1.5}
                                  color="white"
                            />
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img src={this.state.initData.heroImage} alt=""
                         className="img-responsive"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 hero-content">
                  {isMobile ? (
                      <h1 style={{color: 'white', paddingBottom: 0}}
                          className="mt-4 text-center">
                        Sign up for early access!
                      </h1>
                  ) : (<div/>)}
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
                            button   : buttonText,
                          }
                        }
                        // Add a personalized class
                        className='subscribeForm'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="new-section-shape">
              <img src={this.state.initData.actionShapeImage} alt=""/>

            </div>
            {/*<div className="section-shape">*/}
            {/*  <img src={this.state.initData.actionShapeImage} alt=""/>*/}
            {/*</div>*/}
          </section>
        </div>
    );
  }
}

export default HeroSection;
