import React from "react";
// import "./Home.css";

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <div className="container">
                    <div className="row home-row">
                        <div className="col-sm-4 col-xs-6 home-column">
                            <div className="greeting">Call Us Today to Book an Appointment!</div>
                            <div className="greeting">858.658.0691</div>
                        </div>
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;