import React from 'react';

import './global.css'

//import Logon from './pages/Logon'; -> trocamos pelas rotas

import Routes from './routes';

// Componente -> FUnção que retorna html
// JSX -> Quando o HTML Está integrado no JAVASCRIPT
// Propriedades -> por exemplo no Header , tem title="Semana Omnistack" -> dentro do arquivo Header.js no parametro vai ser necessário colocar props e no h1 foi necessario escrever props.title
// Estado -> informação que será mantida pelo componente -> não pode usar variavel convencionais

function App() {
  

  return (
    <Routes />
  );
}

export default App;
