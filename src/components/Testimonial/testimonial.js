import React, { Component } from 'react'

const initData = {
    heading: "10k+ Experts Trust Us",
    content: "Streamlining different processes and workflows by using user access control Onebook prompts efficiency and productivity levels of an organization, and reduces operating costs."
}

const person = [
    {
        id:1,
        name:  "Beatrice Evans",
        designation:  "Digital Marketer",
        "image": "/img/testimonial-4.png" ,
        "openion": "Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.",
    },
    {
        id:2,
        name:  "Beatrice Evans",
        designation:  "Digital Marketer",
        image: "/img/testimonial-4.png" ,
        openion: "Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.",
    },
    {
        id:3,
        name:  "Beatrice Evans",
        designation:  "Digital Marketer",
        image: "/img/testimonial-4.png" ,
        openion: "Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.",
    },
    {
        id:4,
        name:  "Beatrice Evans",
        designation:  "Digital Marketer",
        image: "/img/testimonial-4.png" ,
        openion: "Professionally grow backward-compatible data without tactical alignments. Completely whiteboard cooperative schemas rather than cross-platform intellectual capital. Quickly benchmark wireless relationships via client-centered models.",
    }
]

class Testimonial extends Component {

    state = {
        data: {},
        person: []
    }

    componentDidMount(){

        // you can also make this by api call
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             person: res.data.person
        //         })
        //         console.log(this.state)
        //     })
        //     .catch(err => console.log(err))

            this.setState({
                data: initData,
                person: person
            })
    }

    render() {
        return (
            <section className="testimonial-section bg-secondary ptb-90">
                <div className="testimonial-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading text-center">
                                    <h3>{this.state.data.heading}</h3>
                                    <p>{this.state.data.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="owl-carousel owl-theme testimonial-slider">
                                    
                                    {this.state.person.map((item, idx) => {
                                        return(
                                            <div key={`t_${idx}`} className="item">
                                                <div className="single-testimonial-item">
                                                    <span className="blockquote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <div className="testimonial-content">
                                                        <p>{item.openion}</p>
                                                    </div>
                                                    <div className="testimonial-author">
                                                        <img src={item.image} alt="" />
                                                        <div className="testimonial-author-info">
                                                            <h6>{item.name}</h6>
                                                            <span>{item.designation}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )    
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial