import React from 'react'

import Header from '../components/Header/header'
import Pricing from '../components/Pricing/pricing'
import PromoSection from '../components/PromoSection/promosection'
import Testimonial from '../components/Testimonial/testimonial'
import Faq from "../components/Faq/faq";
import Download from '../components/DownloadSection/downloadTwo'
import Blog from '../components/Blogs/singleBlog'
import Contact from '../components/Contact/contact'
import Footer from '../components/footer/footer'

import HeroSection from '../components/HeroSection/heroThree'
import Feature from '../components/Feature/featureThree'


class ThemeThree extends React.Component{
    render(){
        return(
            <div>
            <div id="preloader">
                    <div id="loader"></div>
                </div>
                {/* End Preloader */}
                <div id="main" className="main-content-wraper">
                    {/* start inner content */}
                    <div className="main-content-inner">
                        <Header />
                        <HeroSection shapeImage={"/img/shap.png"} />
                        <PromoSection />
                        <Feature shapeImage={"/img/waves-shape.svg"} />
                        <Pricing />
                        <Testimonial />
                        <Faq />
                        <Download />
                        <Blog />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThemeThree