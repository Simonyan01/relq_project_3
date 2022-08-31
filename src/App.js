import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lilit from './Lilit/Lilit';
import Login from './Login';
import Lyov from './Lyov/Lyov';
import Menu from './Menu';
import Rozi from './rozi/TodoList';
import Vahe from './vahe/Vahe';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/menu" element={<Menu />} />
                <Route path="/vahe" element={<Vahe />} />
                <Route path="/lilit" element={<Lilit />} />
                <Route path="/lyov" element={<Lyov />} />
                <Route path="/rozi" element={<TodoList />} />
            </Routes>
        </Router>

    );
}

export default App;