import React from "react";
import {Table, Button} from 'react-bootstrap';

const Tabel = ({makanans, editData}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanans, index) => {
          return (        
            <tr key={index}>
              <td>{index+1}</td>
              <td>{makanans.nama}</td>
              <td>{makanans.deskripsi}</td>
              <td>Rp. {makanans.harga}</td>
              <td>
                <button className="btn btn-warning" onClick={() => editData(makanans.id)}>Edit</button>
              </td>
            </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default Tabel;
