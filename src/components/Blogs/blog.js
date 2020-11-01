import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BASE_URL = "https://my-json-server.typicode.com/lhmisho/React-Tutorial/blogSection"

class Blog extends React.Component {

    state = {
        blogs: []
    }
    componentDidMount() {
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    blogs: res.data
                })
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <section className="blog-article-section bg-secondary pt-60 pb-30">
                    <div className="blog-article-wrap">
                        <div className="container">
                            <div className="row">
                                {this.state.blogs.map((item, idx) => {
                                    return (
                                        <div key={`blog_${idx}`} className="col-md-4 col-sm-6">
                                            <div className="single-blog-article mb-30">
                                                <div className="blog-post-img-thumb">
                                                    <Link to="/blog-details/" target="_blank" >
                                                        <img src={item.image} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="blog-post-content-area">
                                                    <h3>
                                                        <Link to="/blog-details/" target="_blank" >{item.heading}</Link>
                                                    </h3>
                                                    <p>{item.content}</p>
                                                    <div className="blog-footer-area">
                                                        <Link to="/blog-details/" target="_blank">
                                                            Read More
                                                            <i className="fa fa-angle-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Blog;