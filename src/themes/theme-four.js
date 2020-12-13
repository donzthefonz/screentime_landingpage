import React, {Component} from 'react'


import Header from '../components/Header/header'
import HeroSection from '../components/HeroSection/heroFour.js'
import ProductCount from '../components/ProductCount/productCount'
import PromoSection from '../components/PromoSection/promosection'
import Feature from '../components/Feature/feature'
import VideoSection from '../components/VideoSection/videosection'
import Pricing from '../components/Pricing/pricing'
import Testimonial from '../components/Testimonial/testimonial'
import Faq from "../components/Faq/faq";
import Download from '../components/DownloadSection/download'

import Blog from '../components/Blogs/singleBlog'
import Contact from '../components/Contact/contact'
import Footer from '../components/footer/footer'

class ThemeFour extends Component{
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
                        <PromoSection />
                        <Feature />
                        <VideoSection imageData={"/img/bg-wave-sym.png"} />
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

export default ThemeFour