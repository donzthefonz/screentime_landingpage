import React from 'react'
import axios from 'axios'
import {appName} from '../../constants'
import { AccessAlarm, HourglassEmpty,Timer,  Devices, CheckCircleOutline, CheckCircle,  Lock, Smartphone, PowerSettingsNew} from '@material-ui/icons';

// const BASE_URL = "http://localhost:3001/themeOneFeatureSection";

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/jsonserver/themeOneFeatureSection";

const data = {
    "content": "The parenting app that let's you limit screen time and incentivise good behaviour for your child. Equips you with the tools to help you, help them.",
    "heading": "Features",
    "image": "/img/parengo_ios_home_large.png",
    "featureDataOne": [
      {
        "id": 1,
        "iconClass": "fa fa-object-ungroup",
        "heading": "Limit Screen Time",
        "content": "By setting a daily allowance for each child, this will help them balance their time in a healthy manner.",
        "icon": "time"
        // clock or stopwatch
      },
      {
        "id": 2,
        "iconClass": "fa fa-dropbox",
        "heading": "Multiple Devices",
        "content": "Support for TVs, Android devices, Windows PCs and games consoles. More platforms coming soon.",
        "icon": "device"
      },
      {
        "id": 3,
        "iconClass": "fa fa-smile-o",
        "heading": "Technology Kill Switch",
        "content": "One button to rule them all. Easily disable all devices from a central point.",
        "icon": "power"
      }
    ],
    "featureDataTwo": [
      {
        "id": 1,
        "iconClass": "fa fa-file-archive-o",
        "heading": "Incentivise Good Behaviour",
        "content": "Give your child tasks with tangible rewards attached. E.g. Walk the dog to earn 30 minutes screen time. ",
        "icon": "task"
      },
      {
        "id": 2,
        "iconClass": "fa fa-adjust",
        "heading": "Unbreakable",
        "content": "Enable 'Guardian Mode' to prevent your child being able to uninstall and disable the app. ",
        "icon": "lock"
      },
      {
        "id": 3,
        "iconClass": "fa fa-smile-o",
        "heading": "App Aware",
        "content": "Not all screen time is created equally. Only limit access to the distracting stuff.",
        "icon": "phone"
      }
    ]
  }

class Feature extends React.Component{
    
    
    state = {
        data : {},
        featureDataOne: [],
        featureDataTwo: [] 
    }

    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             featureDataOne: res.data.featureDataOne,
        //             featureDataTwo: res.data.featureDataTwo
        //         })
        //         // console.log(this.state.data)
        //     })
        //     .catch(err => console.log(err))
        this.setState({
            data: data,
            featureDataOne: data.featureDataOne,
            featureDataTwo: data.featureDataTwo
          })
    }
    
    render(){
        return (
            <div>
                {/* start features section */}
                <section id="features" className="bg-secondary ptb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading text-center">
                                    <h3>{this.state.data.heading}</h3>
                                    <p>{this.state.data.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4 col-sm-6">
                                {/* feature single start */}
                                {this.state.featureDataOne.map((item, idx) => {
                                    return(
                                        <div key={`f_${idx}`} className="single-feature mb-5">
                                            <div className="feature-icon">
                                                <div className="icon icon-shape bg-color white-text">
                                                    {/* <i className={item.iconClass}></i> */}
                                                    {item.icon === 'time' && <HourglassEmpty></HourglassEmpty>}
                                                    {item.icon === 'device' && <Devices></Devices>}
                                                    {item.icon === 'task' && <CheckCircleOutline></CheckCircleOutline>}
                                                    {item.icon === 'lock' && <Lock></Lock>}
                                                    {item.icon === 'power' && <PowerSettingsNew></PowerSettingsNew>}
                                                    {item.icon === 'phone' && <Smartphone></Smartphone>}
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h5>{item.heading}</h5>
                                                <p className="mb-0">{item.content}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* feature single end */}
                            </div>
                            <div className="col-md-4 ">
                                <div className="feature-image img-responsive center-block align-items-center">
                                    <img style={{ margin: '0 auto'}} src={this.state.data.image} className="pos-hcenter img-responsive" alt="" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                {/* feature single start */}
                                {this.state.featureDataTwo.map((item, idx) => {
                                    return(
                                        <div key={`ft_${idx}`} className="single-feature mb-5">
                                            <div className="feature-icon">
                                                <div className="icon icon-shape bg-color white-text">
                                                    {/* <i className={item.iconClass}></i> */}
                                                    {item.icon === 'time' && <HourglassEmpty></HourglassEmpty>}
                                                    {item.icon === 'device' && <Devices></Devices>}
                                                    {item.icon === 'task' && <CheckCircleOutline></CheckCircleOutline>}
                                                    {item.icon === 'lock' && <Lock></Lock>}
                                                    {item.icon === 'power' && <PowerSettingsNew></PowerSettingsNew>}
                                                    {item.icon === 'phone' && <Smartphone></Smartphone>}
                                                </div>
                                            </div>
                                            <div className="feature-content">
                                                <h5>{item.heading}</h5>
                                                <p className="mb-0">{item.content}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* feature single end */}
                            </div>
                          {/*<div className="col-sm-12 col-xs-12 hidden-xl hidden-md">*/}
                          {/*  <div className="feature-image img-responsive center-block align-items-center">*/}
                          {/*    <img src={this.state.data.image} className="pos-hcenter img-responsive" alt="" />*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                        </div>
    
                    </div>
                </section>
                {/* end features section */}
            </div>
        )
    }
}

export default Feature