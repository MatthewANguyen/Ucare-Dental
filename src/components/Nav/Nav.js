import React from "react";
import { Link } from 'react-scroll'
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
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div className="link-container nav-wide">
                        <div className="wideDiv">
                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={offset} duration={duration} onSetActive={this.handleSetActive}>
                                <div className='link'>
                                    Home
                                </div>
                            </Link>
                            <Link activeClass="active" to="team" spy={true} smooth={true} offset={offset} duration={duration} onSetActive={this.handleSetActive}>
                                <div className='link'>
                                    Team
                                </div>
                            </Link>
                            <Link activeClass="active" to="services" spy={true} smooth={true} offset={offset} duration={duration} onSetActive={this.handleSetActive}>
                                <div className='link'>
                                    Services
                                </div>
                            </Link>
                            <Link activeClass="active" to="office" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive}>
                                <div className='link'>
                                    Office
                                </div>
                            </Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={offset} duration={duration} onSetActive={this.handleSetActive}>
                                <div className='link'>
                                    About
                                </div>
                            </Link>
                            <Link activeClass="active" to="location" spy={true} smooth={true} offset={offset} duration={duration} onSetActive={this.handleSetActive}>
                                <div className='link'>
                                    Location
                                </div>
                            </Link>
                            <Link activeClass="active" to="footer" spy={true} smooth={true} offset={offset} duration={duration} onSetActive={this.handleSetActive}>
                                <div className='link'>
                                    Contact
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="nav-narrow">
                        <span className="menu-bar" onClick={this.navToggle}>&#9776;</span>
                        <div className="narrowLinks">
                            <div className='droplink'>
                                <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive} onClick={this.navToggle}>
                                    Home
                                </Link>
                            </div>
                            <div className='droplink'>
                                <Link activeClass="active" to="team" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive} onClick={this.navToggle}>
                                    Team
                                </Link>
                            </div>
                            <div className='droplink'>
                                <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive} onClick={this.navToggle}>
                                    Services
                                </Link>
                            </div>
                            <div className='droplink'>
                                <Link activeClass="active" to="office" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive} onClick={this.navToggle}>
                                    Office
                                </Link>
                            </div>
                            <div className='droplink'>
                                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive} onClick={this.navToggle}>
                                    About
                                </Link>
                            </div>
                            <div className='droplink'>
                                <Link activeClass="active" to="location" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive} onClick={this.navToggle}>
                                    Location
                                </Link>
                            </div>
                            <div className='droplink'>
                                <Link activeClass="active" to="footer" spy={true} smooth={true} offset={0} duration={duration} onSetActive={this.handleSetActive} onClick={this.navToggle}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;