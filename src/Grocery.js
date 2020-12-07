const Grocery = ({id, name, complete, completeToggle, deleteGrocery}) => {
  const toggleClick = () => {
    completeToggle(id);
  }
  return (
  <li style = {complete ? 
              {...styles.grocery, ...styles.complete} : 
              styles.grocery}> 
    {name}
    <span onClick= {toggleClick}> Toggle</span> 
    <span onClick= {() => deleteGrocery(id)}> Delete</span> 
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