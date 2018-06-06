import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

import HeaderNav from './HeaderNav';
const Header = ({navitems, isLoggedin, toggle, isOpen, username}) => (
    <header id="header" className="App-header">
        <Navbar color="faded" light expand="md">
            <Container>
                <NavbarBrand tag={Link} to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <HeaderNav navitems={navitems} />
                    {!isLoggedin &&
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Log In</NavLink>
                            </NavItem>
                        </Nav>
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
    </header>
);

export default Header;
