import React, { Component } from 'react';
import '../style/footer.css'


class Footer extends Component {
    constructor (){
        super()
        this.state = {
            contato: '51 993439138',
            email: 'liampayne@hotmail.com',
            ano: 2020,
            autor: "Liam Payne Corp.",

        };
       

    }
    render (){
        return(
            <footer className='footer border corfooter'>
                <p>Fale Conosco: Telefone: {this.state.contato} - E-mail: {this.state.email}</p>
                <p>Copyright@{this.state.ano} - {this.state.autor}</p>
            
            </footer>);
    }
}





export default Footer;