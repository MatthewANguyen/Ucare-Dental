import React from "react";
import "./FAQ.css";
import QandA from "./QandA";

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
                <div className="faq-cover">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="faq-title">
                                    Got a question?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <QandA qa="services"/>
                <QandA qa="appointment"/>
                <QandA qa="cancellation"/>
                <QandA qa="insurance"/>
            </div>
        );
    };
}
export default FAQ;