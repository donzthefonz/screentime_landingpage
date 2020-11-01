import React from "react";
import axios from "axios";
import { AccessAlarm, HourglassEmpty,Timer,  Devices, CheckCircleOutline,  Lock} from '@material-ui/icons';

const BASE_URL =
  "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOnePromoSection";


let initData =  [
    {
      "id": 1,
      "heading": "Healthy Children",
      "content": "Limit time on screens. Enable a balanced lifestyle.",
      "iconClass": "ti-vector",
      "icon": "time"

    },
    {
      "id": 2,
      "heading": "Less Fights",
      "content": "Let your kids hate Parengo, not you.",
      "iconClass": "ti-headphone-alt",
      "icon": "task"

    },
    {
      "id": 3,
      "heading": "Peace of Mind",
      "content": "Cross platform. Mobile, Windows, PS4 and Xbox.",
      "iconClass": "mdi mdi-golf-cart",
      "icon": "device"
    },
    {
      "id": 4,
      "heading": "  ",
      "content": "  ",
      "iconClass": "ti-headphone-alt",
      "icon": "lock"

    }
  ]

  const missionData = {
    'title': 'Our Mission',
    'contentP1': 'Parengo is here to help parents ensure their kids are discovering all that childhood has to offer, online and off. The Parengo app provides simple monitoring and management tools to achieve a happy balance… argument free!',
    'contentP2': 'As a parent, it’s important to know and understand what your children are up to in order to guide them, to be a parent to them.',
    'contentP3': 'Incredibly, children are spending over 7 hours a day on their smartphones, this is significantly more than the recommended healthy amount of 2 hours.',
    'contentP4': 'This technology revolution has brought some incredible benefits to us all, but an excess of anything can be unhealthy.'

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
                          {item.icon === 'time' && <HourglassEmpty></HourglassEmpty>}
                          {item.icon === 'device' && <Devices></Devices>}
                          {item.icon === 'task' && <CheckCircleOutline></CheckCircleOutline>}
                          {item.icon === 'lock' && <Lock></Lock>}
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
                <div className="section-heading text-center">
                    <h3>{this.state.missionData.title}</h3>
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
