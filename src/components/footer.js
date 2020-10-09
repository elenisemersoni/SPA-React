import React, { Component } from 'react';
import '../style/footer.css'


class Footer extends Component {
    constructor (){
        super()
        this.state = {
            contato: '55 31 999999999',
            email: 'onedirection@gmail.com',
            ano: 2020,
            autor: "One Direction Corp.",

        };
       

    }
    render (){
        return(
            <footer className='footer border corfooter centro'>
                 <div class="tenor-gif-embed" data-postid="17123555" data-share-method="host" data-width="100%" data-aspect-ratio="1.7978339350180503">
                    <a href="https://tenor.com/view/bye-1d-one-direction-liam-payne-harry-styles-gif-17123555">Bye 1D GIF</a> 
                    from <a href="https://tenor.com/search/bye-gifs">Bye GIFs</a></div>
                <p>Fale Conosco: Telefone: {this.state.contato} - E-mail: {this.state.email}</p>
                <p>Copyright@{this.state.ano} - {this.state.autor}</p>
                
            </footer>);
    }
}





export default Footer;