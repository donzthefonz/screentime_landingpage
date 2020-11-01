import React from 'react'
let bg = "/img/video-play.jpg"
let bgCss = "no-repeat center center / cover"
let bgStyle = {
    background: 'url('+bg+')'+bgCss
}

class VideoSection extends React.Component {
    render(){
        return (
            <div>
                {/* start app video section */}
                <div id="video-app" className="video-app-1"
                    style={bgStyle}>
                    <div className="overlay-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="video-play-button">
                                        <a href="https://www.youtube.com/watch?v=9No-FiEInLA"
                                            className="video video-play mfp-iframe" data-toggle="modal"
                                            data-target="#video-popup">
                                            <span className="ti-control-play"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={this.props.imageData} alt="" className="img-responsive" />
                        {/* </div>end overlay */}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoSection;

