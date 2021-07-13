import React, { Component } from 'react'
import Formulir from './Formulir'
import NavbarComponent from './NavbarComponent'
import Table from './Tabel'


export default class Crud extends Component {
    
    

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-6">
                    <br></br>
                    <h3 align="center">CRUD BOOTSTRAP</h3>
                    <br></br>

                    <Table />
                    <br></br>
                    <hr></hr>
                    <Formulir />
                </div>
            </div>
        )
    }
}
