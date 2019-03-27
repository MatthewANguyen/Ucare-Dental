import React from "react";
import "./Contact.css";

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selection: null
        }
    }

    render() {

        return(
            <div className="contact-cover">
                <div className="container">
                    <div className="contact-box">
                        <div className="row text-center">
                            <div className="col-xs-12">
                                <div className="contact-header-1">
                                    We would love to hear from you
                                </div>
                                <div className="contact-header-2">
                                    Give us a call: (858) 658-0691
                                </div>
                                <div className="contact-header-2">
                                    Or
                                </div>
                                <div className="contact-header-2">
                                    Leave us a message below
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <div>
                                    <input type="text" className="form-input" placeholder="Name"/>
                                </div>
                                <div>
                                    <input type="text" className="form-input" placeholder="Email Address"/>
                                </div>
                                <div>
                                    <input type="text" className="form-input" placeholder="Phone"/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <textarea className="form-input-message" rows="5" placeholder="Message">

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
        );
    };
}
export default Contact;