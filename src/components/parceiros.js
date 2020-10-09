import React, { Component } from 'react';
import '../style/footer.css'


class Parceiros extends Component {
    render (){
        return(<div className='textocor centro letra2 py-5 cormeio border'>
            {this.props.name}<br></br>
            <h1>Parceiros</h1>
        </div>);
    }
}






export default Parceiros;