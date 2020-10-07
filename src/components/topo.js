import React, { Component } from 'react';


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
            <div>
              <a href= 'Home'>Home</a>
              <a href= 'Sobre'>Sobre</a>
              <a href= 'Contato'>Contato</a>
              <a href= 'Serviços'>Serviços</a>
              <a href= 'Parceiro'>Parceiros</a><br></br>
            {this.props.name}<br></br>
              <img src= {this.props.img}></img>

            </div>
        );
    }
}

export default Topo;