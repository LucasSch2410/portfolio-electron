import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { About } from '../pages/About';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer'
import { Mouse } from '../components/Mouse/Mouse';
import { NotFound } from '../pages/NotFound';
import { useMouseContext } from '../context/mouseContext';

export default function AllRoutes() {
    const refMouse = React.useRef(null);
    const {setCursorVariant} = useMouseContext();

    return (
        <div className='h-full' ref={refMouse} onMouseEnter={() => setCursorVariant("default")} onMouseLeave={() => setCursorVariant("mouseOut")}>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
                <Footer />
                <Mouse refMouse={refMouse} />
            </HashRouter>
        </div>
    )
}