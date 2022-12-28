import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroller } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';


export const SidebarContainer = styled.aside`
    /* debug */
    /* border: 4px solid white; */

    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${props => props.isOpen ? '100%' : '0'};
    top: ${props => props.isOpen ? '0' : "-100%"};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;




export const SidebarWrapper = styled.div`
    /* debug */
    /* border: 4px solid red; */
    
    color: #fff;
    width: 100%;
    margin-top: -20rem;

    @media screen and (max-width: 480px) {
        margin-top: -20rem;
    }

`;

export const SidebarMenu = styled.div`
    /* debug */
    /* border: 4px solid white; */

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5, 60px);
    }
`;



export const SidebarLink = styled(LinkScroller)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    cursor: pointer;
    /* padding: 12px 0; */
    /* border: 4px solid; */

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }

`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    /* margin-top: 50px; */

`;

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }


`;








