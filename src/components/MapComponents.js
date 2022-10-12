import { useState } from "react";

const MapComponent = () => {
  const [products, setProducts] = useState([])

  setTimeout(() => {
    setProducts([
      {id: 1, name:'pizza', description:'string', stock:'number'},
      {id: 2, name:'hamburguesa', description:'string', stock:'number'},
      {id: 3, name:'ensalada', description:'string', stock:'number'}
    ])
  }, 5000)

  // const prom = new Promise ((resolve, reject)=>{
  //   setTimeout(()=>{
  //     resolve(products);
  //   },3000)
  // });
  
  // prom.then((result)=>{console.log(result)})

  return (
    <>
      <h1>Este es mi componente</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>
              {product.name}
            </h3>
          </li>
        ))}
      </ul>
    </>
  )
};

export default MapComponent;