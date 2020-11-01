import React from "react";

import Header from '../components/Header/header';
import HeroSection from '../components/HeroSection/heroFive';
import CustomerSection from '../components/customerSection/customerSection';
import PromoSection from '../components/PromoSection/promosection';
import Feature from '../components/Feature/featureThree';
import Pricing from '../components/Pricing/pricing';
import Testimonial from '../components/Testimonial/testimonial';
import Faq from "../components/Faq/faq";
import Download from '../components/DownloadSection/download';

import Blog from '../components/Blogs/singleBlog'
import Contact from '../components/Contact/contact'
import Footer from '../components/footer/footer'

class ThemeFive extends React.Component{
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
                        <Feature shapeImage={"/img/white-bottom.png"} />
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
        );
    }
}

export default ThemeFive