import React, { Component } from 'react';
import '../style/footer.css'

// function Topo (){
//     return(
//         <header>
//             <nav>
//                 <a>Home</a>
//                 <a>Sobre</a>
//             </nav>
//         </header>
//     );
// }


// class Topo extends Component {
//     render (){
//         return(
//             <div>
//                 Eu sou o {this.props.name}<br>
//                 </br>
//               <img src= {this.props.img}></img>
//             </div>
//         );
//     }
// }


class Topo extends Component {

    render (){
        return(
            <div className='corfundo letra2 centro textocor '>
              <nav className='corhome'>
              <a className='mx-2 textocor' href= 'Home'>Home</a>
              <a className='mx-2 textocor' href= 'Sobre'>Sobre</a>
              <a className='mx-2 textocor' href= 'Contato'>Contato</a>
              <a className='mx-2 textocor' href= 'Serviços'>Serviços</a>
              <a className='mx-2 textocor' href= 'Parceiro'>Parceiros</a><br></br>
              </nav>
            {this.props.name}<br></br>
              <img className='logo-spin tamanho my-5' src= {this.props.img}></img>

            </div>
        );
    }
}

export default Topo;