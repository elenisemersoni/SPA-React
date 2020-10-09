import React, { Component } from 'react';
import '../style/footer.css'

let list = [
    {name:'Niall', email: 'niallhoran@gmail.com'},
    {name: 'Louis', email:'louistomnlinson@gmail.com'}
];

class Sobre extends Component {
 
    constructor(props){
        super();
        this.state = {
            text:props.text,
            name: "One Direction",
        };
        this.setName = this.setName.bind(this);
        this.resetName = this.resetName.bind(this);
    };

    

    setName(){
        this.setState({
            name:'The Biggest Boyband'
        });
    };

    resetName(){
        this.setState({
            name:'One Direction'
        });
    };

    render (){
        
        return(<div className='textocor letra2 py-5 cormeio border centro' id='sobre'>
            
            <h1 className='textocor centro'>Quem somos</h1>
            <p className='textocor centro letra3'>{this.state.text}</p>
            <p className='letra3'>Ela era composta pelos garotos britânicos Liam Payne, Harry Styles, Louis Tomlinson e Zayn Malik, e ainda pelo irlandês Niall Horan</p>
            <p className='letra3 '>O quinteto foi criado após seus membros terem participado do famoso programa de TV, o X-Factor, um reality show musical, a exemplo do Fama que foi realizado no Brasil. 
            Eles tiveram de se unir no programa, para concorrem na categoria de grupo e acabaram ficando com a terceira colocação entre todos os finalistas.</p>
            <p> Hello We Are {this.state.name}</p>
            <button className='textocor corfundob' onClick = {this.setName}>Mudar nome</button>
            <button className='textocor corfundob' onClick = {this.resetName}>Resetar nome</button><br></br>
            <img className='tamanho2' src= {this.props.img}></img>
        </div>
        );
    };
};






export default Sobre;