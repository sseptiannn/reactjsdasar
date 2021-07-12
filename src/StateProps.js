import React, { Component } from 'react'
import Operand from './Operand';

export default class StateProps extends Component {

    constructor(props){
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    gantiMkanan = (new_mknn) => {
        this.setState({
            makanan : new_mknn
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button
                onClick={() => this.gantiMkanan("Nasgor")}
                >Ganti Makanan</button>

                <Operand makanan={this.state.makanan} gantiMkanan={this.gantiMkanan}/>
            </div>
        )
    }
}
