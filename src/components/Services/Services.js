import React from "react";
import FullService from './FullService.js';

class Services extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: "block",
            selection: null
        }
        this.expand = this.expand.bind(this);
    }

    expand(id) {

        if(this.state.expanded === "block") {
            this.setState({
                expanded: "none",
                selection: id
            })
        } else {
            this.setState({
                expanded: "block",
                selection: null
            })
        }
    }

    render() {

        let expansion = this.state.expanded;
        let service;
        let backButton;
        if(this.state.selection) {
            service = <FullService service={this.state.selection}/>
            backButton = <div className="row">
                <div className="back-button" onClick={this.expand}>
                     BACK
                </div>
            </div>
            console.log('full service ready');
        } else {
            service = null;
            backButton = null;
            console.log('full service NOT ready');
        }

        return(
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>
                                Featured Services
                            </h1>
                        </div>
                    </div>
                    {service}
                    {backButton}
                    <div id="all-services" className="row" style={{display: expansion}}>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="bonding" className="service-box" onClick={() => this.expand("bonding")}>
                                Bonding
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="cleaning" className="service-box" onClick={() => this.expand("cleaning")}>
                                Cleaning
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="crowns" className="service-box" onClick={() => this.expand("crowns")}>
                                Crowns & Bridges
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="fillings" className="service-box" onClick={() => this.expand("fillings")}>
                                Fillings
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="implants" className="service-box" onClick={() => this.expand("implants")}>
                                Implants
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="orthodontics" className="service-box" onClick={() => this.expand("orthodontics")}>
                                Orthodontics
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="veneers" className="service-box" onClick={() => this.expand("veneers")}>
                                Veneers
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div id="whitening" className="service-box" onClick={() => this.expand("whitening")}>
                                Whitening
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;