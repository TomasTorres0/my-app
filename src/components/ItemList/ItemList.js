import Item from "./Item";
import './ItemList.css'; 
const ItemList = ({ products = [] }) => {
  return (
    <div className="itemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
 
export default ItemList;