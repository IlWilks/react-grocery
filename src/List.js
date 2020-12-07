const List = (props) => {
  const renderGroceries = () => {
    console.log(props)
    return props.items.map((item) => {
      return item.name
    })
}
return <ul>{renderGroceries()}</ul>
}

export default List;