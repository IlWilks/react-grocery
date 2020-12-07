import {useState} from "react"

const AddGroceryFunc = (props) => {

  const [groceryName, setGroceryName] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting")
    props.addGroceryCallback(groceryName);
    console.log(groceryName);
    setGroceryName("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder = "enter Grocery item" 
        onChange = {(e) => {setGroceryName(e.target.value);}}
        value = {groceryName}/> 
      </form> 
    </div> 
  )
}

export default AddGroceryFunc;

