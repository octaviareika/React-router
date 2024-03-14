import React from "react";
import Menu from "../components/Menu";
import Content from "../components/layouts/Content";
import "./App.css";

import { BrowserRouter } from "react-router-dom"; // importando a bibloteca de Router

export default function App(props){
    return (
        <div className="app">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    );

}