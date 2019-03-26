import React from "react";
// import { Link } from 'react-scroll'
import { Link } from "react-router-dom";
import logo from '../../data/images/Logo3.png';


class Nav extends React.Component {

    navToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        linksEl.classList.toggle("clicked");
    }

    render() {

        return(
            <nav className="top-scroll">
                <div className="container">
                    <div>
                        <Link to="/">
                            <img className="logo" src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className="link-container nav-wide">
                        <div>
                            <div className='link'>
                                <Link to="/FAQ">
                                    FAQ
                                </Link>
                            </div>
                            <div className='link'>
                                Team
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
                            <Link to="/FAQ">
                                FAQ
                            </Link>                        
                            </div>
                            <div className='droplink'>                            
                                Team                           
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