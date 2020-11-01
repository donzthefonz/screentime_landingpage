import React from 'react';


class Comments extends React.Component {
    render() {
        return (
            < div >
                <div className="col-sm-12">
                    <h3 className="blog-details-subtitle">Post Comments</h3>
                    <ul className="blog-comments">
                        {this.props.comments.map((comment, idx) => {
                            return (
                                <li key={`comment_${idx}`}>
                                    <img src={comment.image} alt="" />
                                    <div className="blog-comment-author">
                                        <h6>{comment.name}</h6>
                                        <a href="reply" className="active"> Reply </a>
                                        <span>{comment.date}</span>
                                        <p>{comment.content}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
        )
    }
}
export default Comments;