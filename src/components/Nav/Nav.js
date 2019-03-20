import React from "react";
// import { Link } from 'react-scroll'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../data/images/Logo3.png';


class Nav extends React.Component {

    navToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        linksEl.classList.toggle("clicked");
    }

    render() {

        let offset = -50;
        let duration = 800;

        return(
            <nav>
                <div className="container">
                    <div>
                        <Link to="/">
                            <img className="logo" src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="link-container nav-wide">
                        <div>
                            <div className='link'>
                                Home
                            </div>
                            <div className='link'>
                                Team
                            </div>
                            <div className='link'>
                                Services
                            </div>
                            <div className='link'>
                                Office
                            </div>
                            <div className='link'>
                                About
                            </div>
                            <div className='link'>
                                Location
                            </div>
                            <div className='link'>
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="nav-narrow">
                        <span className="menu-bar" onClick={this.navToggle}>&#9776;</span>
                        <div className="narrowLinks">
                            <div className='droplink'>
                        
                                Home
                            
                            </div>
                            <div className='droplink'>
                            
                                Team
                            
                            </div>
                            <div className='droplink'>
                            
                                Services
                            </div>
                            <div className='droplink'>
                                Office
                            </div>
                            <div className='droplink'>
                                About
                            </div>
                            <div className='droplink'>
                                Location
                            </div>
                            <div className='droplink'>
                                Contact
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;