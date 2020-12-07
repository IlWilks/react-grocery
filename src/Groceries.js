import React from "react";
import AddGroceryFunc from "./AddGroceryFunc";
import List from "./List";

class Groceries extends React.Component {

  state = {
    groceries: [
      {id:1, name: "Butter", complete: false},
      {id:2, name: "Milk", complete: false},
      {id:3, name: "Eggs", complete: false},
    ]
  };

  addGroceries = (groceryName) => {
    const grocery = {
      id: Math.random(),
      name: groceryName,
      complete: false,
    };

    this.setState({
      groceries: [...this.state.groceries, grocery],
    });
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
      <AddGroceryFunc addGroceryCallback = {this.addGroceries}/>
      <List completeToggle = {this.toggle} items = {this.state.groceries} />
    </div>
  )
  }
}

export default Groceries;