import React, { Component } from "react";


class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.myForm = React.createRef()
  }

  state = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  }

  changHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitHangler = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.myForm.current.reset()
    this.setState({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form
          ref={this.myForm}
          onSubmit={this.submitHangler}
          className="contact-us-form"
          noValidate="novalidate"
        >
          <h6>Reach us quickly</h6>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  required="required"
                  onChange={this.changHandler}
                  value={this.state.name}
                />
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  required="required"
                  onChange={this.changHandler}
                  value={this.state.email}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Your Phone"
                  onChange={this.changHandler}
                  value={this.state.phone}
                />
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  value={this.state.company}
                  onChange={this.changHandler}
                  size="40"
                  className="form-control"
                  id="company"
                  placeholder="Your Company"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="7"
                  cols="25"
                  placeholder="Message"
                  onChange={this.changHandler}
                  value={this.state.message}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-20">
              <button
                type="submit"
                className="btn softo-solid-btn pull-right"
                id="btnContactUs"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
