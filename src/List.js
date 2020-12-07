import Grocery from "./Grocery"

const List = (props) => {
  const renderGroceries = () => {
    return props.items.map((item) => {
      return <Grocery key={item.id}
                      id = {item.id}
                      name = {item.name}
                      complete = {item.complete} 
                      completeToggle = {props.completeToggle}
                      deleteGrocery = {props.deleteGrocery}/>
    })
}
return <ul>{renderGroceries()}</ul>
}

export default List;