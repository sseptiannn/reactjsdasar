import React, { Component } from 'react'
import Formulir from './Formulir'
import NavbarComponent from './NavbarComponent'
import Table from './Tabel'


export default class Crud extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanans : [],
             nama : "",
             deskripsi : "",
             harga : 0,
             id :"",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // console.log("Data : ", this.state);

        if(this.state.id === ""){
            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id: this.state.makanans.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga,
                    }
                ]
            })
        }else{
            const makananUnChoose = this.state.makanans
            .filter((mknn) => mknn.id !== this.state.id)
            .map((filterMknn) => {
                return filterMknn;
            })

            this.setState({
                makanans: [
                    ...makananUnChoose,
                    {
                        id: this.state.makanans.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga,
                    }
                ]
            })

        }

        this.setState ({
            nama : "",
            deskripsi : "",
            harga : 0,
            id :"",
       })
    }

    editData = (id) => {
        // console.log("ID : ", id);
        
        const makananChoose = this.state.makanans
        .filter((mknn) => mknn.id === id)
        .map((filterMknn) => {
            return filterMknn
        })

        this.setState({
            nama: makananChoose[0].nama,
            deskripsi: makananChoose[0].deskripsi,
            harga: makananChoose[0].harga,
            id: makananChoose[0].id,
        })
    }
    

    render() {
        console.log(this.state.makanans);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-6">
                    <br></br>
                    <h3 align="center">CRUD BOOTSTRAP</h3>
                    <br></br>

                    <Table makanans={this.state.makanans} editData={this.editData}/>
                    <br></br>
                    <hr></hr>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
