import React from "react";
import "./Context.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../../src/views/examples/Home";
import About from "../../../src/views/examples/About";
// Switch foi substituído pelo Routes na nova versão
export default function Content(props){
    return (
        <main className="content">
        
            <Routes> {/*Rota e o path é a url que faz a navegação para um determinado componente. Quando a url for chamada, o componente é renderizado*/ }
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/about" element={<About />} /> {/*Localhost/about */}
            </Routes>
        </main>
    );
}