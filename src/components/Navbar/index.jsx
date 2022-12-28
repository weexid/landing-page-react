import React from 'react';
import { Nav, NavbarContainer, MobileIcon, NavLogo, NavMenu, NavItem, NavLink, NavBtnLink, NavBtn } from './Navbar.styled';
import { FaBars } from 'react-icons/fa';



function Navbar({ sidebarToggle }) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Weexid
                    </NavLogo>
                    <MobileIcon onClick={sidebarToggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="discover">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="signup">Sign Up</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar