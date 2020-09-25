import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, withRouter } from "react-router-dom";
import '../App.css';

function Navigation(props) {
    return (
        <div className="navigation">
            <Nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-color">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="NameBanner.png" alt="Tyler Dillon"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                            <li  // Projects button
                                    className={`nav-item ${
                                        props.location.pathname === "/" ? "active" : ""
                                    }`}>
                                    <Link className="nav-link" to="/projects">
                                        Projects
                                    </Link>
                                </li>                                
                                <li  // Github button
                                    className={`nav-item`}>
                                    <Nav.Link href="https://github.com/TylerDillon" target='_blank'>GitHub</Nav.Link>
                                </li>
                                <li  // About button
                                    className={`nav-item ${
                                        props.location.pathname === "/" ? "active" : ""
                                    }`}>
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </Nav>
        </div>
    );
}

export default withRouter(Navigation);