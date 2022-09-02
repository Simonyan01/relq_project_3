import React from 'react';
import { useNavigate } from "react-router-dom";

function Menu() {
  let navigate = useNavigate();
  return (
    <div>
      <h1 className='m_text'> This is the Menu page!</h1>
      <div className="menu">
        <button class="lilit" onClick={() => { navigate("/Lilit") }}>Lilit</button>
        <button class="rozi" onClick={() => { navigate("/Rozi") }}>Rozi</button>
        <button class="vahe" onClick={() => { navigate("/Vahe") }}>Vahe</button>
        <button class="lyov" onClick={() => { navigate("/Lyov") }}>Lyov</button>
      </div>
    </div>
  );
}

export default Menu;