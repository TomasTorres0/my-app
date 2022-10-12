import { useState } from "react";
import Item from "../ItemList/Item"

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(value);
  };

  return (
    <>
      <Item product={product} />
      <button onClick={() => handleClick(count - 1)}>-</button>
      <h4>Cantidad de click {count}</h4>
      <button onClick={() => handleClick(count + 1)}>+</button>
    </>
  );
}
 
export default ItemDetail;