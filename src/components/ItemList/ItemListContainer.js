import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProducts, getProductsByCategory } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])

  return (
    <Container>
      <p className="description">
        Las posibilidades de nuestros muebles son infinitas... Una visita a nuestro 
        Showroom le permite ver la extension de nuestra propuesta.
      </p>
      <h3 className="greeting">{greeting}</h3>
      <ItemList products={products} />
    </Container>
  );
}
 
export default ItemListContainer;