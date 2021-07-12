import React, { Component } from "react";
import Sublifecyce from './Sublifecyce';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Baksoo",
      data: {},
      tampilHlmnSub: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) =>  response.json()) 
      .then((json) => {
          this.setState({
              data : json
          })
      })
  }

  ubahMakanan(value){
      this.setState({
          makanan : value
      })
  }

  render() {

    // console.log("Data : ", this.state.data);

    return (
      <div>
        <h2>{this.state.makanan}</h2>
        
        {this.state.tampilHlmnSub && <Sublifecyce ubahMakanan={(value) => this.ubahMakanan(value)}/>}

        <button onClick={() => this.setState({tampilHlmnSub: !this.state.tampilHlmnSub})}>Tampilkan hlmn sub</button>
      </div>
    );
  }
}
