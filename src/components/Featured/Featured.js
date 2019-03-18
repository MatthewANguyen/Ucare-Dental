import React from "react";
import "./Featured.css";
import featured from "../../data/text/featured.js";
import crown from "../../data/images/crown.png"
import braces from "../../data/images/braces.png"
import clean from "../../data/images/clean.png"
import filling from "../../data/images/filling.png"

class Featured extends React.Component {

    render() {

        return(
            <div className="featured">
                <div className="container">
                    <div className="row">
                        {/*<div className="col-md-6 col-sm-12">*/}
                        {/*<div>CEREC</div>*/}
                        {/*{featured.cerec}*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6 col-sm-12">*/}
                        {/*<div>Fast Braces</div>*/}
                        {/*{featured.fastbraces}*/}
                        {/*</div>*/}
                        <div className="col-md-3 col-sm-6 featured-box">
                            <img src={crown} className="icon-class" alt="crown"/>
                            <div className="featured-header">Single-visit Crowns</div>
                            {featured.cerec}
                        </div>
                        <div className="col-md-3 col-sm-6 featured-box-even">
                            <img src={clean} className="icon-class" alt="cleanings"/>
                            <div className="featured-header">Cleanings</div>
                        </div>
                        <div className="col-md-3 col-sm-6 featured-box">
                            <img src={braces} className="icon-class" alt="braces"/>
                            <div className="featured-header">Orthodontics</div>
                            {featured.fastbraces}
                        </div>
                        <div className="col-md-3 col-sm-6 featured-box-even">
                            <img src={filling} className="icon-class" alt="fillings"/>
                            <div className="featured-header">Fillings</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;