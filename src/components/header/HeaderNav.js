import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const HeaderNav = ({navitems}) => (
    <Nav navbar>
        {navitems && navitems.map((navitem, index) =>
            <NavItem key={index}>
                <NavLink exact to={navitem.url} activeClassName="active" tag={RRNavLink}>{navitem.title}</NavLink>
            </NavItem>
        )}
    </Nav>
);

export default HeaderNav;
