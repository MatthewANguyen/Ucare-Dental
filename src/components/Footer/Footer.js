import React from "react";
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
                            <button type="submit" className="btn btn-contact">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;