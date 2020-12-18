import React from "react";
import axios from "axios";
import { AccessAlarm, HourglassEmpty,Timer,  Devices, CheckCircleOutline,  Lock, SportsKabaddi, Favorite } from '@material-ui/icons';
import { FaPeace, FaClock, FaRegAngry, FaBalanceScale } from "react-icons/fa";
import { MdFavoriteBorder, MdSentimentSatisfied, MdAccessTime, MdThumbUp } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import { BiRocket } from "react-icons/bi";
import { BsFillBarChartFill } from "react-icons/bs";


const BASE_URL =
  "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOnePromoSection";


let initData =  [
    {
      "id": 1,
      "heading": "Less Fighting",
      "content": "Parengo handles the dirty work so you don't have to.",
      "iconClass": "ti-headphone-alt",
      "icon": "fight"

    },
    {
      "id": 2,
      "heading": "Child Development",
      "content": "Encourage learning and uncover your child's potential.",
      "iconClass": "mdi mdi-golf-cart",
      "icon": "development"
    },
    {
      "id": 3,
      "heading": "Family Time",
      "content": "More time with your family doing the things you love best.",
      "iconClass": "ti-headphone-alt",
      "icon": "clock"

    }
  ]
  // 'contentOL1': `One platform for your child’s digital supervision, progression and healthy development.`,
  // 'contentOL2': `Like a parental control app, but better.`,
// in a world with 21st century problems, we need 21st century tools and solutions.
// One platform for monitoring, protecting and guiding all of your child's digital activities. From gaming to social media, we need a 21st century tool for 21st century problems. It's like a parental control app, but better.
  const missionData = {
    'title': 'Our Mission',
    'contentOL1': `One platform for managing your child’s screen time and incentivising positive behaviour.`,
    'contentOL2': `Like a parental control app, but better.`,
    'contentP1': `Our Three Goals`,
    'contentP2': `We do this through a platform that helps to reduce time spent on digital devices.
    Children have a daily minutes allowance, set by you, that allow them to play games, scroll through social media, watch YouTube videos, etc.
    `,
    'contentP3': `If they want more screen time, they must earn more minutes by completing tasks and developing habits. This gives you leverage to set goals for your child and have them directly incentivised towards them.`,
    'contentP4': `Those goals can be anything from brushing their teeth everyday, completing an online class to washing the dishes or practising their musical instrument.`,
    'goals':  [
      {
        "id": 1,
        "heading": "Make Parenting Easier",
        "content": "Limit time on screens. Enable a balanced lifestyle.",
        "icon": "thumb"
  
      },
      {
        "id": 2,
        "heading": "Enable a Balanced Lifestyle",
        "content": "Parengo handles the dirty work so you don't have to.",
        "icon": "balance"
  
      },
      {
        "id": 3,
        "heading": "Maximise Your Child's Potential",
        "content": "Encourage learning and uncover your child's potential.",
        "icon": "chart"
      }
    ]

  }

class PromoSection extends React.Component {
  state = {
    data: [],
    missionData: {},
    goals: []
  };

  componentDidMount() {
    // axios
    //   .get(`${BASE_URL}`)
    //   .then(res => {
    //     this.setState({
    //       data: res.data.promoData
    //     });
    //     // console.log(this.state.data);
    //   })
    //   .catch(err => console.log(err));
    this.setState({
      data: initData,
      missionData: missionData,
      goals: missionData.goals
    })
  }

  render() {
    return (
      <div>
        {/* start promo section */}
        <section className="promo-section ptb-40">
          <div className="promo-section-wrap">
            <div className="container">
              <div className="row">
                {this.state.data.map((item, idx) => {
                  return (
                    <div key={`s_${idx}`} className="col-md-4 col-sm-12">
                      <div className="bg-white single-promo-section text-center">
                        <div className="single-promo-content">
                          {item.icon === 'fight' && <MdSentimentSatisfied size="50" ></MdSentimentSatisfied>}
                          {item.icon === 'development' && <BiRocket size="50" ></BiRocket>}
                          {item.icon === 'clock' && <MdAccessTime size="50"></MdAccessTime>}
                          <h5>{item.heading}</h5>
                          <h6>{item.content}</h6>
                        </div>
                        <div className="line"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className="faq-section">
        <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                      <p style={{maxWidth:"1000px", fontWeight:"normal", fontSize:"1.2rem", textAlign: "center", marginTop:"10px", marginBottom: "40px"}}>
                        <p style={{maxWidth:"1000px"}}>{this.state.missionData.contentP2}</p>
                        <p></p>
                        <p></p>
                        <p style={{maxWidth:"1000px"}}>{this.state.missionData.contentP3}</p>
                        <p></p>
                        <p></p>
                        <p style={{maxWidth:"1000px"}}>{this.state.missionData.contentP4}</p>
                      </p>
                </div>
            </div>
        </div>
          
        </section>

        {/* end promo section */}
      </div>
    );
  }
}

export default PromoSection;
