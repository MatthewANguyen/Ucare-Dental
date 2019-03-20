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

        let service;
        var answerArray = [false, false, false, false];
        if(this.state.selection) {
            // service = <Answer answer={this.state.selection}/>
        } else {
            service = null;
        }

        return(
            <div>
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