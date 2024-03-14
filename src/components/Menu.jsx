import React from "react";
import "../components/Menu.css";
import {Link} from 'react-router-dom'

export default function Menu(props){
    return (
        <aside>
            <nav>
                <ul>
                    <li> 
                        <Link to="/">Inicio</Link> {/*Ja gera uma tag a (navegacao) */}
                    </li>
                    <li> 
                        <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}