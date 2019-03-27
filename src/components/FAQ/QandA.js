import React from "react";
import questions from "../../data/text/questions.js"
import answers from "../../data/text/answers.js"
import "./FAQ.css";

class QandA extends React.Component {

    constructor(props) {    
        super(props)
        this.state = {
            qa: this.props.qa,
            clicked: false
        }
        this.handleQuestionClick = this.handleQuestionClick.bind(this);
    }

    handleQuestionClick(event) {
        const idString = event.target.id.toString();
        const answerId = idString.substring(0, idString.length - 4) + "-aid";
        document.querySelector('#'+ answerId).classList.toggle("answer-clicked");
        document.querySelector('#'+ idString).classList.toggle("question-clicked");
    }

    render() {

        let qid = this.state.qa + "-qid";
        let aid = this.state.qa + "-aid";
        let question ="";
        let answer = "";

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
            default:
                break;  
        }

        return(
            <div className="faq-section text-left">
                <div className="container">
                    <div className="row">
                        <div className="qanda">
                            <div className="col-xs-12 nopadding">
                                <div className="question" id={qid} onClick={this.handleQuestionClick}>
                                    {question}
                                </div>
                            </div>
                            {/* <div className="col-xs-12">
                                <div className="answer" id={aid}>
                                    {answer}
                                </div>
                            </div> */}
                            <div className="col-xs-12 nopadding"> 
                                <div className="answer" id={aid}>                     
                                    {answer}  
                                </div>                              
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default QandA;