import React from 'react'

const Images = [
    {id: 1, image: "img/client/customer-logo-1.png"},
    {id: 2, image: "img/client/customer-logo-2.png"},
    {id: 3, image: "img/client/customer-logo-3.png"},
    {id: 4, image: "img/client/customer-logo-4.png"},
    {id: 5, image: "img/client/customer-logo-7.png"},
    {id: 6, image: "img/client/customer-logo-8.png"},
    {id: 7, image: "img/client/customer-logo-10.png"},
    {id: 8, image: "img/client/customer-logo-9.png"},
]

class CustomerSection extends React.Component {

    state = {
        Images: []
    }

    componentDidMount(){
        this.setState({
            Images: Images
        })
    }

    render() {
        return (
            <div>
                {/* start customers section */}
                <div className="customers-section pt-40">
                    <div className="customers-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 col-sm-4">
                                    <div className="higlight-text">
                                        <p><strong>Info!</strong> Trusted by the world’s most innovative company.</p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-8">
                                    <div className="customers-content">
                                        <div className="owl-carousel owl-theme customers-slider">
                                            {this.state.Images.map((item, idx) =>{
                                                return(
                                                    <div key={`customer_${idx}`} className="item">
                                                        <img src={item.image} alt="client logo" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end customers section */}
            </div>
        );
    }
}
export default CustomerSection;