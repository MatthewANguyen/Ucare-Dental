import React from "react";
import doctor from "../../data/images/Doctor.png";

class Team extends React.Component {
    render() {
        return(
            <div className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                                Dr. Hien Bui, DMD
                            </h2>
                            <p>
                                Dr. Hien Bui is a resident of San Diego, California. He received his
                                Bachelor of Science (B.S.) from the University of California, Davis and
                                his Doctor of Dental Medicine degree (D.M.D.) from the University
                                of Pennsylvania. He is a member of the American Dental Association,
                                California Dental Association, and San Diego County Dental Society.
                            </p>
                        </div>
                        <div className="col-md-6">
                            {/*<img className="doctor-img" src={doctor} alt="doctor"/>*/}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Team;