import React, { Component } from 'react';
import '../style/footer.css'
import ceu from '../img/ceu.jpeg'




class Contato extends Component {
    render (){
        return(<div className='textocor centro letra2 py-5 cormeio border' >
            {this.props.name}<br></br>
            <h1>Contatos</h1>
            

        </div>);
    }
}






export default Contato;