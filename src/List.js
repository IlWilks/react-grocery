import Grocery from "./Grocery"

const List = (props) => {
  const renderGroceries = () => {
    console.log(props)
    return props.items.map((item) => {
      return <Grocery key={item.id}
                      name = {item.name} />
    })
}
return <ul>{renderGroceries()}</ul>
}

export default List;