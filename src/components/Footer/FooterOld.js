import React from "react";
import instagram from "../../data/images/instagram_icon.png";
import facebook from "../../data/images/facebook_icon.png";
// import "./Footer.css";

class FooterOld extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 text-left">
                            <div className="row phone">
                                <div className="col-xs-12">
                                    <p>
                                        <span className="glyphicon glyphicon-earphone glyphicon-style"></span>
                                        <span className="phone-style">858.658.0691</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row address">
                                <div className="col-xs-12">
                                    <span className="glyphicon glyphicon-map-marker glyphicon-style marker-style"></span>
                                    <div className="address-block">
                                        <p>
                                            <span className="address-style">6255 Lusk Blvd Suite 250</span>
                                        </p>
                                        <p>
                                            <span className="address-style">San Diego, CA 92121</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-xs-4">
                                        <img src={instagram} className="social-media-icon" alt="instagram"/>
                                    </div>
                                    <div className="col-xs-4">
                                        <a href="https://www.facebook.com/ucare.dental.7" target="_blank" rel="noopener noreferrer">
                                        <img src={facebook} className="social-media-icon" alt="facebook"/>
                                        </a>
                                    </div>
                                    <div className="col-xs-4">

                                    </div>
                                </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="row text-center">
                                <h1>
                                    Contact Us
                                </h1>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div>
                                        <input type="text" className="form-input" placeholder="NAME"/>
                                    </div>
                                    <div>
                                        <input type="text" className="form-input" placeholder="EMAIL"/>
                                    </div>
                                    <div>
                                        <input type="text" className="form-input" placeholder="PHONE"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <textarea className="form-input-message" rows="5" placeholder="MESSAGE">

                                    </textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button type="submit" className="btn btn-contact">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterOld;