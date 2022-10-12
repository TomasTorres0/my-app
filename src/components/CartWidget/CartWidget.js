import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/cart">
      <AiOutlineShoppingCart />
    </Link>
  );
}
 
export default CartWidget;