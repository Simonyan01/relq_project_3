import React from 'react';
import { useNavigate } from "react-router-dom";

function Menu() {
  let navigate = useNavigate();
  return (
    <div>
      <h1 className='m_text'>TABLE MENU </h1>
      <div className="menu">
        <button class="lyov lyov_btn" onClick={() => { navigate("/Lyov") }}>Lyov</button>
        <button class="vahe vahe_btn" onClick={() => { navigate("/Vahe") }}>Vahe</button>
        <button class="rozi rozi_btn" onClick={() => { navigate("/Rozi") }}>Rozi</button>
        <button className="lilit lilit_btn" onClick={() => { navigate("/Lilit") }}>Lilit</button>
      </div>
    </div>
  );
}

export default Menu;