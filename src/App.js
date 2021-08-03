// this file represents the entire application
// All routers must be wrapped in the BrowserRouter

import React from "react"
import { BrowserRouter } from 'react-router-dom'

import MainSection from "./containers/MainSection";
import SideBar from './containers/SideBar'

import MobileHeader from './components/MobileHeader'
import FooterPlayer from './components/FooterPlayer';

import "./styles.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <MobileHeader />
                    <div className="flex relative">
                        <SideBar />
                        <MainSection />
                        <FooterPlayer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;