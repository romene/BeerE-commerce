import React from 'react'
import {Link as NavLink} from 'react-router-dom' 
import { NavItem, Nav} from 'reactstrap'

const MenuNavbar = () => {
    return (
        <React.Fragment>
            <Nav className="mx-auto" navbar>
                <NavItem>
                    <NavLink to="/" className="nav-link" >Index</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/beers" className="nav-link">Beers</NavLink>
                </NavItem>  
            </Nav>
        </React.Fragment>
    )
}

export default MenuNavbar
