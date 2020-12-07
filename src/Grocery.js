const Grocery = ({id, name, complete, completeToggle, deleteGrocery, editGrocery}) => {
  const toggleClick = () => {
    completeToggle(id);
  }
  const editClick = () => {
    let newName = prompt("Please enter a new grocery name")
    editGrocery(id, newName)
  }
  return (
  <li className = "item" style = {complete ? 
              {...styles.grocery, ...styles.complete} : 
              styles.grocery}> 
    {name}
    <div className="buttons">
      <button id = {complete ? "uncomplete": "complete"}onClick= {toggleClick}>{complete ? "Un-complete" : "Complete"}</button>
  <button id="delete" onClick= {() => deleteGrocery(id)}>Delete</button>
      <button id="edit" onClick= {editClick}>Edit</button> 
    </div>
  </li>
  )
}

const styles = {
  grocery: {
    cursor: "Pointer"
  },
  complete: {
    color: "red", textDecoration: "line-through"
  }
}

export default Grocery;