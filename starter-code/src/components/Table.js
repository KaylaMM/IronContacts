import React, { Component } from "react";
//need to import contacts.json
import contacts from "../contacts.json";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }

  componentDidMount() {
    this.setState({ contacts: contacts.slice(0, 5) });
  }

  render() {
    console.log(this.state.contacts);
    return <div></div>;
  }
}

export default Table;
