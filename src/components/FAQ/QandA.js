import React from "react";
import questions from "../../data/text/questions.js"
import answers from "../../data/text/answers.js"
import "./FAQ.css";

class QandA extends React.Component {

    constructor(props) {    
        super(props)
        this.state = {
            qa: this.props.qa
        }
    }

    handleClick(event) {
        const id = event.target.id;
        switch(id) {
            case "service-qid":
                
                break;
            case "appointment-qid":
                
                break;
            case "cancellation-qid":
                
                break;
            case "insurance-qid":   
                
                break;
        }
    }

    render() {

        let qid = this.state.qa + "-qid";
        let aid = this.state.qa + "-aid";
        let question ="";
        let answer = "";
        let className = this.props.clicked;

        switch(this.state.qa) {
            case "services":
                question = questions.services;
                answer = answers.services;
                break;
            case "appointment":
                question = questions.appointment;
                answer = answers.appointment;
                break;
            case "cancellation":
                question = questions.cancellation;
                answer = answers.cancellation;
                break;
            case "insurance":   
                question = questions.insurance;
                answer = answers.insurance;
                break;
        }

        return(
            <div className="faq text-left">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="question" id={qid} onClick={this.handleClick}>
                                {question}
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="answer" id={aid}>
                                {answer}
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        );
    };
}
export default QandA;