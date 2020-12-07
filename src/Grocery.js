const Grocery = ({id, name, complete, completeToggle, deleteGrocery, editGrocery}) => {
  const toggleClick = () => {
    completeToggle(id);
  }
  const editClick = () => {
    let newName = prompt("Please enter a new grocery name")
    editGrocery(name, newName)
  }
  return (
  <li style = {complete ? 
              {...styles.grocery, ...styles.complete} : 
              styles.grocery}> 
    {name}
    <span onClick= {toggleClick}> Toggle</span> 
    <span onClick= {() => deleteGrocery(id)}> Delete</span> 
    <span onClick= {editClick}> edit</span> 
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