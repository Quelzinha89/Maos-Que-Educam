import React from 'react';
import background from './imagens/background.png'
import Home from './componente/home';
import Aluno from './componente/Aluno';
import { Routes, Route }from 'react-router-dom'


const divStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  color: "white",
  height:"100vh",
};

function App() {
  return (
    <div style={divStyle}>
      <Routes>
        <Route path='/'element={ <Home/> }/>
        <Route path='/aluno'element={ <Aluno/> }/>
      </Routes>
    </div>
  );
}

export default App;
