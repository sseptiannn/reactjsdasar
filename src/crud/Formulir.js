import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="my-3">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" name="nama"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} name="deskripsi"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga"/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;