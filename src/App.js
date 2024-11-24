import React from 'react';
import background from './imagens/background.png'
import Home from './componente/home';


const divStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  color: "white",
  height:"100vh",
};

function App() {
  return (
    <div style={divStyle}>
      <Home></Home>
    </div>
  );
}

export default App;
