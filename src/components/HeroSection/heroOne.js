import React from "react";
import {appName} from '../../constants'
import MailchimpSubscribe from "react-mailchimp-subscribe"

import { AccessAlarm, HourglassEmpty,Timer,  Devices, CheckCircleOutline,  Lock, SportsKabaddi, Favorite } from '@material-ui/icons';
import { FaPeace, FaClock, FaRegAngry, FaBalanceScale } from "react-icons/fa";
import { MdFavoriteBorder, MdSentimentSatisfied, MdAccessTime, MdThumbUp } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { BiRocket } from "react-icons/bi";
import { BsFillBarChartFill } from "react-icons/bs";

const url = "https://gmail.us2.list-manage.com/subscribe/post?u=5f3611d15bda0115be9f88bd4&amp;id=9bcf244908";
const SimpleForm = () => <MailchimpSubscribe url={url}/>


let initData ={
  // heading: appName + " - The Parenting App",
  // content: "Making it easy to limit your child's screentime usage.",
  heading: appName,
  content: "Parenting just got easier.",
  image:    "/img/waves-shape.svg",
  sliderImage: "/img/iphone-x-frame.png",
}
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
let phoneImage = [
  { image: "/img/top-screen-1.png" },
  { image: "/img/top-screen-5.png" },
  { image: "/img/top-screen-2.png" },
  { image: "/img/top-screen-6.png" },
  { image: "/img/top-screen-3.png" },
  { image: "/img/top-screen-7.png" },
  { image: "/img/top-screen-8.png" }
];

let benefitsData =  [
  {
    "id": 1,
    "heading": "Healthy Children",
    "content": "Limit time on screens. Enable a balanced lifestyle.",
    "iconClass": "ti-vector",
    "icon": "health"

  },
  {
    "id": 2,
    "heading": "Less Fighting",
    "content": "Parengo handles the dirty work so you don't have to.",
    "iconClass": "ti-headphone-alt",
    "icon": "fight"

  },
  {
    "id": 3,
    "heading": "Child Development",
    "content": "Encourage learning and uncover your child's potential.",
    "iconClass": "mdi mdi-golf-cart",
    "icon": "development"
  },
  {
    "id": 4,
    "heading": "Family Time",
    "content": "More time with your family doing the things you love best.",
    "iconClass": "ti-headphone-alt",
    "icon": "clock"

  }
];
class HeroSection extends React.Component {
  // noinspection JSAnnotator
  state = {
    initData: {},
    sliderData: [],
    phoneImage: [],
    benefits: []
  };
  componentDidMount() {

    // you can do this by make a api call
    // axios
    //   .get(`${URL}`)
    //   .then(res => {
    //     this.setState({
    //       initData ....
    //     });
    //     // console.log(this.state.sliderData);
    //   })
    //   .catch(err => console.log(err));
    
    this.setState({
      initData: initData,
      sliderData: slider_action_data,
      phoneImage: phoneImage,
      benefits: benefitsData
    })
  }

  render() {
    return (
      <div>
        {/* start hero section */}
        <section id="hero" className="section-lg section-hero section-circle">
          {/* background circle shape */}
          <div className="shape shape-style-1 shape-primary">
            <span className="circle-150"></span>
            <span className="circle-50"></span>
            <span className="circle-50"></span>
            <span className="circle-75"></span>
            <span className="circle-100"></span>
            <span className="circle-75"></span>
            <span className="circle-50"></span>
            <span className="circle-100"></span>
            <span className="circle-50"></span>
            <span className="circle-100"></span>
          </div>
          {/* background circle shape */}
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="hero-content-wrap">
                  <div className="hero-content">
                    <h1>{this.state.initData.heading}</h1>
                    <p>{this.state.initData.content}</p>
                    <h3 style={{marginTop: "100px", marginBottom: "20px"}}>Subscribe for Updates</h3>
                    <SimpleForm></SimpleForm>
                    {/* <div className="slider-action-btn">
                      {this.state.sliderData.map((data, idx) => {
                        return (
                          <a key={`sk_${idx}`} href={data.link} className={data.btnClass}> 
                            <i className={data.faClass}></i>{data.value}
                          </a>
                        );
                      })}
                    </div> */}
                  </div>
                </div>
                {/* <section className="promo-section ptb-90">
                  <div className="promo-section-wrap">
                    <div className="container">
                      <div className="row">
                        {this.state.benefits.map((item, idx) => {
                          return (
                            <div key={`s_${idx}`} className="col-md-3 col-sm-6">
                              <div className="bg-secondary single-promo-section text-center">
                                <div className="single-promo-content">
                                  {item.icon === 'health' && <MdFavoriteBorder size="30"></MdFavoriteBorder>}
                                  {item.icon === 'fight' && <MdSentimentSatisfied size="30" ></MdSentimentSatisfied>}
                                  {item.icon === 'development' && <BiRocket size="30" ></BiRocket>}
                                  {item.icon === 'clock' && <MdAccessTime size="30"></MdAccessTime>}
                                  <h6>{item.heading}</h6>
                                  <p>{item.content}</p>
                                </div>
                                <div className="line"></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section> */}
              </div>
              <div className="col-md-4">
                <div className="mobile-slider-area">
                  <div className="phone">
                    <img src={this.state.initData.sliderImage} alt="" className="img-responsive"/>
                    <div className="mobile-slider owl-carousel owl-theme">
                      {this.state.phoneImage.map((item, idx) => {
                        return (
                          <div key={`pi_${idx}`} className="item">
                            <img src={item.image} alt="" className="img-responsive" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="slider-indicator">
                    <ul>
                      <li id="prev">
                        <i className="fa fa-angle-left"></i>
                      </li>
                      <li id="next">
                        <i className="fa fa-angle-right"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-shape">
            <img src={this.state.initData.image} alt="" />
          </div>
        </section>
        {/* end hero section */}
      </div>
    );
  }
}

export default HeroSection;
