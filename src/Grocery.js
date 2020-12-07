const Grocery = ({id, name, complete, completeToggle}) => {
  console.log(complete)
  const handleClick = () => {
    completeToggle(id);
  }
  return (
  <li onClick = {handleClick}
      style = {complete ? {...styles.grocery, ...styles.complete} : styles.grocery}> {name} </li>
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