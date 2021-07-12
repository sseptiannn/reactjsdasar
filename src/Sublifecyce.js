import React, { Component } from 'react'

export default class Sublifecyce extends Component {

    componentWillUnmount(){
        this.props.ubahMakanan("Satee")
    }

    render() {
        return (
            <div>
                <h2>Component Sub Lifecycle</h2>
            </div>
        )
    }
}
