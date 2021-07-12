import React, { Component } from 'react'

export default class Operand extends Component {

    render() {
        const { makanan, gantiMkanan} = this.props
        return (
            <div>
                <h2>Operan State yg mnjdi Props : {makanan}</h2>

                <button onClick={() => gantiMkanan("Nasgor")} >Ganti Makanan</button>

                <br></br>
                <br></br>

                <button onClick={() => gantiMkanan("Siomay")} >Ganti Makanan Lagi</button>
            </div>
        )
    }
}
