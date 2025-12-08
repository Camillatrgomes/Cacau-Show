import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Card from "./components/Card";
import Carrinho from './components/Carrinho';
import Footer from './components/Footer';

function App() {
    const [aberto, setAberto] = useState(false);

  return (
    <div>
      
     <NavBar abrirCarrinho={() => setAberto(true)}/>
     <Home/>
      <Card abrirCarrinho={() => setAberto(true)} />
      <Carrinho aberto={aberto} fechar={() => setAberto(false)} />
      <Footer/>
     </div>  
     )
}

export default App
