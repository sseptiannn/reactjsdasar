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

        if(this.state.id === ""){   //Jika tidak ada ID, maka Add New
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
        }else{  //Update data
            const makananUnChoose = this.state.makanans   //deklarasi ulang Makanans 
            .filter((mknn) => mknn.id !== this.state.id)  //filter Array Makanans yg tidak = ID
            .map((filterMknn) => {
                return filterMknn;
            })

            this.setState({ //di set lagi ke array makanans
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
        
        const makananChoose = this.state.makanans //deklarasi array makanan yg dipilih
        .filter((mknn) => mknn.id === id) //filter makanan sesuai ID yg dipilih
        .map((filterMknn) => {
            return filterMknn
        })

        this.setState({ //di set dgn data yg diedit
            nama: makananChoose[0].nama,
            deskripsi: makananChoose[0].deskripsi,
            harga: makananChoose[0].harga,
            id: makananChoose[0].id,
        })
    }

    hapusData = (id) => {
        // console.log("Hapus id : ", id);

        const makananSetelahDelete = this.state.makanans //deklarasi array makanan yg dipilih
        .filter((mknn) => mknn.id !== id) //filter makanan selain ID yg dipilih mau didelete
        .map((filterMknn) => {
            return filterMknn
        });

        this.setState({
            makanans : makananSetelahDelete
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

                    <Table makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData}/>
                    <br></br>
                    <hr></hr>
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
