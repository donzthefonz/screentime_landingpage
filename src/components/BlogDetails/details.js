import React from 'react'
import Comments from './comment'
import Reply from './reply'

const blogDetail = {
    title: "Continually aggregate interdependent infrastructures with progressive.",
    author: "Mr. Joy",
    date: "1 August 2019",
    image: "/img/blog-img2.jpg",
    qoute: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque suscipit tincidunt magna non mollis. Fusce tempus tincidunt nisi, in luctus elit pellentesque quis. Sed velit mi, ullamcorper ut tempor ut, mattis eu lacus. Morbi rhoncus aliquet tellus, id accumsan enim sollicitudin vitae.",
    contentOne: "So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child she new.",
    contentTwo: "Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old. Sometimes strangers his ourselves her depending you boy. Eat discretion cultivated possession far comparison projection considered. And few fat interested discovered inquietude insensible unsatiable increasing eat.Procuring education on consulted assurance in do. Is sympathize he expression mr no travelling. Preference he he at travelling in resolution.",
    contentThree: "Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows."
}
const comments = [
    {
      id: 1,
      name: "Lillie J. Yates",
      date: "Dec 26, 2017 at 15:35",
      image: "/img/t2.jpg",
      content: "Continually leverage existing distinctive sources after excellent data. Interactively evolve enterprise leadership skills vis-a-vis."
    },
    {
      id: 2,
      name: "Todd B. Tucker",
      date: "Jan 16, 2018 at 04:35",
      image: "/img/t3.jpg",
      content: "Professionally envisioneer enabled interfaces vis-a-vis plug-and-play supply chains. Competently benchmark real-time value without process-centric."
    }
  ]

class Details extends React.Component {
    
    state = {
        data: {},
        comments: []
    }

    componentDidMount(){
        this.setState({
            data: blogDetail,
            comments: comments
        })
        // console.log(this.state.comments)
    }
    
    render() {
        return (
            <div>
                <section className="blog-details-area bg-secondary ptb-60">
                    <div className="blog-details-area-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="blog-single-content-wrap">
                                        <div className="blog-single-img">
                                            <img src={this.state.data.image} alt="" className="img-responsive" />
                                        </div>
                                        <h1>{this.state.data.title}</h1>
                                        <div className="blog-details-post-meta">Posted <span>{this.state.data.date} </span>{this.state.data.author}</div>
                                        <div className="blog-details-text">

                                            <p>{this.state.data.contentOne}</p>
                                            <br />
                                            <p>{this.state.data.contentTwo}</p>
                                            <blockquote>
                                                {this.state.data.qoute}
                                            </blockquote>
                                            <p>{this.state.data.contentThree}</p>
                                        </div>
                                        <div className="row">
                                            <Comments comments={this.state.comments}/>
                                            <Reply />   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Details;