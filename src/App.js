import React, { Component } from 'react'; 
// import logo from './logo.svg';
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
        <Topo name='Hey Muggle' img={melancia}></Topo>
        <Sobre name= 'Sobre'></Sobre>
        <Contato name='Contato'></Contato>
        <Serviços name='Serviços'></Serviços>
        <Parceiros name='Parceiros'></Parceiros>
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