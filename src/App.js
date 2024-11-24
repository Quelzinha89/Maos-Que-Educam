import React from 'react';
import background from './imagens/background.png'
import Home from './componente/home';
import Aluno from './componente/Aluno';
import Videos from './componente/Videos';
import Video from './componente/Video';
import Professor from './componente/Professor';
import ProfessorCurso from './componente/ProfessorCurso';
import { Routes, Route }from 'react-router-dom'



const divStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  color: "white",
  minHeight:"100vh",
};

function App() {
  return (
    <div style={divStyle}>
      <Routes>
        <Route path='/'element={ <Home/> }/>
        <Route path='/aluno'element={ <Aluno/> }/>
        <Route path='/aluno/videos'element={ <Videos/> }/>
        <Route path='/professor'element={ <Professor/> }/>
        <Route path='/aluno/videos/:tipo'element={ <Video/> }/>
        <Route path='/professorCurso'element={ <ProfessorCurso/> }/>
      </Routes>
    </div>
  );
}

export default App;
