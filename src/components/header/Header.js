import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

import HeaderNav from './HeaderNav';
const Header = ({navitems, isLoggedin, toggle, isOpen, username}) => (
    <Navbar color="faded" light expand="md">
        <Container>
            <NavbarBrand tag={Link} to="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <HeaderNav navitems={navitems} />
                {!isLoggedin &&
                    <ul classNamename="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="nav-link">Sign Up</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link">Log In</button>
                        </li>
                    </ul>
                }
                {isLoggedin &&
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav>
                            {username}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                }
            </Collapse>
        </Container>
    </Navbar>
);

export default Header;
