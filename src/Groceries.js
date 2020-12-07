import React from "react";
import List from "./List";

class Groceries extends React.Component {

  state = {
    groceries: [
      {id:1, name: "Butter", complete: false},
      {id:2, name: "Milk", complete: false},
      {id:3, name: "Eggs", complete: false},
    ]
  };

  render () {
    return (
    <div>
      <h1>Groceries</h1>
      <List items = {this.state.groceries} />
    </div>
  )
  }
}

export default Groceries;