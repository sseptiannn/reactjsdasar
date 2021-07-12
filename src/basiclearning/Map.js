import React from 'react'

// Map (kalo PHP itu perulangan (for, foreach))
const foods = [
    {
        nama : 'Soto',
        harga : 12000
    },
    {
        nama : 'Bakso',
        harga : 15000
    },
    {
        nama : 'Nasgor',
        harga : 10000
    },
    {
        nama : 'Siomay',
        harga : 8000
    },
]

// Reduce
const totalBayar = foods.reduce((totalHarga, afood) => totalHarga+afood.harga, 0);

const Map = () => {
    return (
        <div>
            <h2>Map sdhrna </h2>

            <ul>
                {foods.map((afood, index) => (
                    <li>{index+1}. {afood.nama} - Harga {afood.harga}</li>
                ))}
            </ul>
            <br></br>
            <br></br>

            <h2>Map yang lebih dari 10rb :  </h2>
            <ul>
                {foods 
                .filter((afood) => afood.harga > 10000)
                .map((afood, index) => (
                    <li>{index+1}. {afood.nama} - Harga {afood.harga}</li>
                ))}
            </ul>

            <h3>Total harga : {totalBayar}</h3>
        </div>
    )
}

export default Map
