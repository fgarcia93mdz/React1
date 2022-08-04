import React from 'react';
// Se importa el CSS
import './assets/css/app.css';
// Se importan los contenedores 
import SlideBar from './components/SlideBar';
import ContentWrapper from './components/ContentWrapper'

// Comienzo de la funcion en app

function App() {
  return (
<div id = "wrapper" >
    <SlideBar />
    <ContentWrapper />
</div>

  );
}

export default App;
