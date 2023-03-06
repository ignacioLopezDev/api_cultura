import React from "react";
import { ChatIA } from "../ChatIA";
import {Map} from "../Map"
import {Museos} from "../../pages/Museos"
import './Navbar.css'

export const Navbar = () => {
  return (
    <header>
    <nav>
        <ul> 
          <Museos/>
          <ChatIA/> 
          <Map/> 
          </ul>
    </nav>
    </header>
  );
};


// https://github.com/evita-fernan/my-portfolio
// file:///home/nachoparque/Descargas/(2%20)%20APICULTURA.pdf
// https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive