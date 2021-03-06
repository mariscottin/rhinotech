import React from 'react';
import { Link } from 'react-scroll';

import './Navlinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li className="close-side-drawer">X</li>
            <li>
                <Link
                    activeClass="active"
                    to="servicesSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="nav-link"
                    onClick={props.closeDrawerHandler}
                >
                    Services
                    </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="stackSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="nav-link"
                    onClick={props.closeDrawerHandler}
                >
                    Stack
                    </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="methodSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="nav-link"
                    onClick={props.closeDrawerHandler}
                >
                    Method
                    </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="contactSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="nav-link get-started-navlink"
                    onClick={props.closeDrawerHandler}
                >
                    Get Started
                    </Link>
            </li>

        </ul>
    )
}

export default NavLinks;