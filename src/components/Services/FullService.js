import React from "react";
import description from "../../data/text/descriptions.js";

class FullService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.service
        }
    }

    render() {

        let summary = "";

        switch(this.state.description) {
            case "bonding":
                summary = description.bonding;
                break;
            case "cleaning":
                summary = description.cleaning;
                break;
            case "crowns":
                summary = description.crowns;
                break;
            case "fillings":
                summary = description.fillings;
                break;
            case "implants":
                summary = description.implants;
                break;
            case "orthodontics":
                summary = description.orthodontics;
                break;
            case "veneers":
                summary = description.veneers;
                break;
            case "whitening":
                summary = description.whitening;
                break;
            default: summary = <div><p>Unknown Service</p></div>
        }

        if(this.state.description === "bonding") {
            summary = description.bonding;
        }

        return(
            <div className="full-service">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            {this.props.service}
                        </h1>
                        {summary}
                    </div>
                </div>
            </div>
        );
    }
}

export default FullService;