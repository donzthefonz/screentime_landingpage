import React from 'react'

import Header from '../Header/header'
import Footer from '../footer/footer'
import Slider from '../Blogs/slider'
import Details from './details'

class Main extends React.Component {

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
                        <Details />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
export default Main