import React from 'react';
import { useNavigate } from "react-router-dom";

function Menu() {
    let navigate = useNavigate();
    return (

      <div className="Menu">
        This is the Menu page!
        <button class="lilit" onClick={() => {navigate("/Lilit")}}>Lilit</button>
        <button class="rozi" onClick={() => {navigate("/Rozi")}}>Rozi</button>
        <button class="vahe" onClick={() => {navigate("/Vahe")}}>Vahe</button>
        <button class="lyov" onClick={() => {navigate("/Lyov")}}>Lyov</button>
      </div>
    );
  }
  
  export default Menu;