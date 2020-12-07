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

  toggle = (id) => {
    let updateGroceries = this.state.groceries.map((g) => {
      if (g.id !== id){
        return g
      }
      return {...g, complete:!g.complete}
    })
    this.setState({groceries: updateGroceries})

  }

  render () {
    return (
    <div>
      <h1>Groceries</h1>
      <List completeToggle = {this.toggle} items = {this.state.groceries} />
    </div>
  )
  }
}

export default Groceries;