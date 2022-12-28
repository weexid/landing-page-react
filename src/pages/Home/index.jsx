import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickToggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (

        <>
            <Navbar sidebarToggle={handleClickToggleSidebar} />
            <Sidebar sidebarToggle={handleClickToggleSidebar} isOpen={isOpen} />
            <HeroSection />
        </>
    )
}

export default Home