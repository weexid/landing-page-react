import React from 'react';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute

} from './Sidebar.styled'

function Sidebar({ isOpen, sidebarToggle }) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={sidebarToggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={sidebarToggle} to="about">
                        About
                    </SidebarLink>
                    <SidebarLink onClick={sidebarToggle} to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink onClick={sidebarToggle} to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink onClick={sidebarToggle} to="signup">
                        Sign up
                    </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute tp="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar