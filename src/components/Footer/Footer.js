import React from "react";
import instagram from "../../data/images/instagram_icon.png";
import facebook from "../../data/images/facebook_icon.png";
// import "./Footer.css";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-12 text-left">
                            <div className="phone">
                                <p>
                                    <span className="glyphicon glyphicon-earphone glyphicon-style"></span>
                                    <span className="phone-style">858.658.0691</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-8 col-xs-12 text-left">
                            <div className="address">
                                <span className="glyphicon glyphicon-map-marker glyphicon-style marker-style"></span>
                                <div className="address-block">
                                    <p>
                                        <span className="address-style">6255 Lusk Blvd Suite 250, San Diego, CA 92121</span>
                                    </p>
                                    {/*<p>*/}
                                        {/*<span className="address-style">San Diego, CA 92121</span>*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 col-sm-12 col-xs-12">

                        </div>
                        <div className="col-xs-4 col-md-1 col-sm-4 social-media">
                            <img src={instagram} className="social-media-icon" alt="instagram"/>
                        </div>
                        <div className="col-xs-4 col-md-1 col-sm-4 social-media">
                            <a href="https://www.facebook.com/ucare.dental.7" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} className="social-media-icon" alt="facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;