import React from "react";
import Slideshow from './Slideshow';

class Office extends React.Component {
    render() {
        return(
            <div className="office">
                <div className="office-hours">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 hours">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h4>Office Hours</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h2>Monday</h2>
                                        <h2>Tuesday</h2>
                                        <h2>Wednesday</h2>
                                        <h2>Thursday</h2>
                                        <h2>Friday</h2>
                                    </div>
                                    <div className="col-xs-6">
                                        <h3>7:30 - 4:30</h3>
                                        <h3>7:30 - 4:30</h3>
                                        <h3>7:30 - 4:30</h3>
                                        <h3>7:30 - 4:30</h3>
                                        <h3>7:30 - 4:30</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h4>Financial Options</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <p>We are committed to providing quality and affordable dental health care. You have multiple options for payment available. For your convenience we accept cash, Visa, checks, major insurance, participating insurance, MasterCard, CareCredit, in-house plans, and Wells Fargo.</p>
                                        <p>We understand that unexpected dental bills can sometimes strain finances. If this happens, talk with us immediately by calling us at (858) 658-0691. If you help us keep the lines of communication open, we can usually work out acceptable arrangements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slideshow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-10">
                                <Slideshow/>
                            </div>
                            <div className="col-md-1">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Office;