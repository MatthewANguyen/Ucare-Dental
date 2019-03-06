import React from "react";
import "./Featured.css";
import featured from "../../data/text/featured.js";

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
                            {featured.cerec}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div>Fast Braces</div>
                            {featured.fastbraces}
                        </div>
                    </div>
                    <div className="row">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;