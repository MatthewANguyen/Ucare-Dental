import React from "react";
import "./Featured.css";

class Featured extends React.Component {
    render() {
        return(
            <div className="featured">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="featured-header">Featured Services</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div>CEREC</div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div>Fast Braces</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;