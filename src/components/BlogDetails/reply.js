import React from "react";


class Reply extends React.Component {
    constructor(props) {
        super(props)
        this.myForm = React.createRef()
    }
    state = {
        name: "",
        email: "",
        message: ""
    }

    changHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      submitHandler = (event) => {
        event.preventDefault();
        this.myForm.current.reset()
        this.setState({
          name: '',
          email: '',
          message: ''
        })
      }

    render() {
        return (
            <div>

                <form ref={this.myForm} onSubmit={this.submitHandler} className="col-sm-12 comment-form send-message">
                    <h3 className="blog-details-subtitle">Leave a Reply</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <input onChange={this.changHandler.bind(this)} value={this.state.name} name="name" className="comment-input-field" type="text" placeholder="Name" />
                        </div>
                        <div className="col-md-6">
                            <input onChange={this.changHandler.bind(this)} value={this.state.email} name="email" className="comment-input-field" type="text" placeholder="Email" />
                        </div>
                        {/* Message */}
                        <div className="col-md-12">
                            <textarea onChange={this.changHandler.bind(this)} value={this.state.message} name="message" placeholder="Message" rows="5" />
                        </div>
                    </div>
                    <input className="btn softo-solid-btn" type="submit" value="Send" />
                </form>
            </div>
        )
    }
}
export default Reply;