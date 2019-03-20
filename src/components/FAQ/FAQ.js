import React from "react";
import "./FAQ.css";
import Answer from "./Answer.js";

class FAQ extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selection: null
        }
    }
    render() {
        return(
            <div className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="question">
                                What kind of services do you offer?
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="question">
                                How should I book an appointment?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default FAQ;