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
                        <div className="col-sm-4 text-left">
                            <div className="phone">
                                <p>
                                    <span className="glyphicon glyphicon-earphone glyphicon-style"></span>
                                    <span className="phone-style">858.658.0691</span>
                                </p>
                            </div>
                            <div className="address">
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
                                <div className="row">
                                    <div className="col-xs-4">
                                        <img src={instagram} className="social-media-icon" />
                                    </div>
                                    <div className="col-xs-4">
                                        <a href="https://www.facebook.com/ucare.dental.7" target="_blank">
                                        <img src={facebook} className="social-media-icon" />
                                        </a>
                                    </div>
                                    <div className="col-xs-4">

                                    </div>
                                </div>
                        </div>
                        <div className="col-sm-8">
                            <h1>
                                Contact Us
                            </h1>
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
                                <textarea className="form-input-message" rows="5" placeholder="MESSAGE">

                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-contact">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;