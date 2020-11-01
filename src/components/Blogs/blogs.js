import React from 'react'

import Header from '../Header/header'
import Footer from '../footer/footer'
import Blog from './blog'
import Slider from './slider'

class Blogs extends React.Component {

    render() {
        return (
            <div>
                <div id="preloader">
                    <div id="loader"></div>
                </div>
                {/* End Preloader */}
                <div id="main" className="main-content-wraper">
                    {/* start inner content */}
                    <div className="main-content-inner">
                        <Header />
                        <Slider />
                        <Blog />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogs