import React, {Component} from 'react'

import Header from '../components/Header/header'
import Pricing from '../components/Pricing/pricing'
import PromoSection from '../components/PromoSection/promosection'
import VideoSection from '../components/VideoSection/videosection'
import Testimonial from '../components/Testimonial/testimonial'
import Faq from "../components/Faq/faq";
import Download from '../components/DownloadSection/download'
import Blog from '../components/Blogs/singleBlog'
import Contact from '../components/Contact/contact'
import Footer from '../components/footer/footer'

import HeroSection from '../components/HeroSection/heroTwo'
import CustomerSection from '../components/customerSection/customerSection'
import Feature from '../components/Feature/featureTwo'

class ThemeTwo extends Component{
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
                        <HeroSection />
                        <CustomerSection />
                        <PromoSection />
                        <Feature />
                        <VideoSection imageData={"/img/shap.png"} />
                        <Pricing />
                        <Testimonial />
                        <Download />
                        <Faq />
                        <Blog />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThemeTwo