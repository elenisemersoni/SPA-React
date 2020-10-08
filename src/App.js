import React, { Component } from 'react'; 
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/footer.css';
import './App.css';
import Topo  from './components/topo';
import Sobre from './components/sobre';
import Contato from './components/contato';
import Serviços from './components/serviços';
import Parceiros from './components/parceiros';
import Footer from './components/footer';
import melancia from './img/melancia.png';
// function App() {
//   return (
//     <div className="App">
//       <Topo></Topo>
//       <footer>Rodapé da page</footer>
//     </div>
//   );
// }

class App extends Component {
  render () {
    return (
      <div className="App">
       
        <Topo className='corfundo' name='Hey Muggle' img={melancia}></Topo>
        <Sobre text= 'Projeto efetuado via React em Pagina Única'></Sobre>
        <Contato></Contato>
        <Serviços ></Serviços>
        <Parceiros ></Parceiros>
        <Footer></Footer>
      
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   render () {
//     return (
//       <div className="App">
//         <Topo name='Fulano' img={melancia}></Topo>
        
//       </div>
//     );
//   }
// }