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
            name: "Liam",
        };
        this.setName = this.setName.bind(this);
        this.resetName = this.resetName.bind(this);
    };

    

    setName(){
        this.setState({
            name:'Harry'
        });
    };

    resetName(){
        this.setState({
            name:'Liam'
        });
    };

    render (){
        
        return(<div className='letra py-5 cormeio border' id='sobre'>
            
            <h1>Sobre</h1>
            <p>{this.state.text}</p>
            <p>Eu sou o {this.state.name}</p>
            <button onClick = {this.setName}>Mudar nome</button>
            <button onClick = {this.resetName}>Resetar nome</button>
        </div>
        );
    };
};






export default Sobre;