import React from "react";
import axios from "axios";
import { AccessAlarm, HourglassEmpty,Timer,  Devices, CheckCircleOutline,  Lock, SportsKabaddi, Favorite } from '@material-ui/icons';
import { FaPeace, FaClock, FaRegAngry } from "react-icons/fa";
import { MdFavoriteBorder, MdSentimentSatisfied, MdAccessTime } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";


const BASE_URL =
  "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOnePromoSection";


let initData =  [
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
      "heading": "Peace of Mind",
      "content": "With more cooperation from children, life becomes calmer.",
      "iconClass": "mdi mdi-golf-cart",
      "icon": "peace"
    },
    {
      "id": 4,
      "heading": "Family Time",
      "content": "More time with your family doing the things you love best.",
      "iconClass": "ti-headphone-alt",
      "icon": "clock"

    }
  ]

  const missionData = {
    'title': 'Our Mission',
    'content': `Our goal is to enable parents to help their children have a healthy childhood and uncover their potential.
    We do this through a platform, built in collaboration with researchers, to reduce time spent on digital devices for entertainment in a way that facilitates understanding and encourages good behaviour both online and offline! Children are required to earn the minutes they want to spend on entertainment by accomplishing tasks and developing habits, whether that’s achieving a streak of brushing their teeth, completing an online class or practicing their musical instrument for an hour.`,
    'contentP1': 'Our goal is to enable parents to help their children have a healthy childhood and uncover their potential.',
    'contentP2': 'We do this through a platform, built in collaboration with researchers, to reduce time spent on digital devices for entertainment in a way that facilitates understanding and encourages good behaviour both online and offline!',
    'contentP3': 'Children have a daily minutes allowance, set by you, that allow them to play games, scroll social media, watch YouTube videos, etc.',
    'contentP4': 'But if they want more than that, they must earn the minutes they want to spend on entertainment by accomplishing tasks and developing habits, whether that’s achieving a streak of brushing their teeth, completing an online class or practicing their musical instrument for an hour.'

  }

class PromoSection extends React.Component {
  state = {
    data: [],
    missionData: {}
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
      missionData: missionData
    })
  }

  render() {
    return (
      <div>
        {/* start promo section */}
        <section className="promo-section ptb-90">
          <div className="promo-section-wrap">
            <div className="container">
              <div className="row">
                {this.state.data.map((item, idx) => {
                  return (
                    <div key={`s_${idx}`} className="col-md-3 col-sm-6">
                      <div className="bg-secondary single-promo-section text-center">
                        <div className="single-promo-content">
                          {item.icon === 'health' && <MdFavoriteBorder size="30"></MdFavoriteBorder>}
                          {item.icon === 'fight' && <FaRegAngry size="26" ></FaRegAngry>}
                          {item.icon === 'peace' && <MdSentimentSatisfied size="30" ></MdSentimentSatisfied>}
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
        </section>
        <section id="mission" className="faq-section ptb-90">
        <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                    <div className="text-center">
                      <h3>{this.state.missionData.title}</h3>
                    </div>
                    <p>{this.state.missionData.contentP1}</p>
                    <p>{this.state.missionData.contentP2}</p>
                    <p>{this.state.missionData.contentP3}</p>
                    <p>{this.state.missionData.contentP4}</p>
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
