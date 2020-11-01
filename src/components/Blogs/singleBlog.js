import React, { Component } from 'react'
import { Link } from "react-router-dom";
const initData = {
    heading: "Latest News",
    content: "Streamlining different processes and workflows by using user access control Onebook prompts efficiency and productivity levels of an organization, and reduces operating costs."
}

const blogData = [
    {
        image: "/img/blog-img1.jpg",
        heading: "Continually reinvent",
        content: "Professionally grow technically sound technologies with fully researched metrics.Assertively embrace empowered."
    },
    {
        image: "/img/blog-img2.jpg",
        heading: "Competently impact strategic",
        content: "Professionally grow technically sound technologies with fully researched metrics. Assertively embrace empowered."
    },
    {
        image: "/img/blog-img3.jpg",
        heading: "Rapidiously predominate just",
        content: "Appropriately develop high-payoff catalysts for change after premier e-markets. Interactively maximize pandemic niche markets."
    },
    {
        image: "/img/blog-img4.jpg",
        heading: "Interactively productize low-risk",
        content: "Appropriately develop high-payoff catalysts for change after premier e-markets. Interactively maximize pandemic niche markets."
    }
]

class Blog extends Component {

    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        /**
        you can do this by make a api call
        axios.get(`${URL}`)
            .then(res => {
                this.setState({
                    initData: res.data,
                    data: res.data....
                })
            })
            .catch(err => console.log(err))
        */
        this.setState({
            initData: initData,
            data: blogData
        })
    }
    render() {
        return (
            <section id="news" className="ptb-90 bg-secondary">
                <div className="blog-section-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading text-center">
                                    <h3>{this.state.initData.heading}</h3>
                                    <p>{this.state.initData.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="sliderBlog" className="owl-carousel">

                                {this.state.data.map((data, idx) => {
                                    return(
                                        <div key={`blog_${idx}`} className="single-blog-article">
                                            <div className="blog-post-img-thumb">
                                                <Link to="/blog-details/" target="_blank" >
                                                    <img src={data.image} alt="" />
                                                </Link>
                                            </div>
                                            <div className="blog-post-content-area">
                                                <h3><Link to="/blog-details/" target="_blank" >{data.heading}</Link></h3>
                                                <p>{data.content}</p>
                                                <div className="blog-footer-area">
                                                    <Link to="/blog-details/" target="_blank" >
                                                        Read More
                                                        <i className="fa fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blog