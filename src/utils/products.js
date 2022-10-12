export const products = [
    {id: 1, title:' - Sillon Altobello - ', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/ALTOBELLO.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 2, title:'Sillon Maffia', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i1.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/chester.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 3, title:'Sillon Resuelve problemas', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i0.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/CHESTER-DIVAN.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Cuadrado', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/Sillon-conico-1.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Escandy', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i0.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/cubo_d.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Escape', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i0.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/emily.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Rustic', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/ESCANDINAVO.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Ivory', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i1.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/IVORY.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Marcus', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i0.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/MARCUS.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Mv', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/mv.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Mv Esquinero', category: 'sillones', description:'Medidas: desde 2mts x 2mts hasta 3mts x 3mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i1.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/MV-ESQUINERO.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Neolandia', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i0.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/pietro.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Sillon Sinsy', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2018/04/VARSOVIA.jpg?fit=600%2C600&ssl=1', stock:'number'},
    {id: 4, title:'Respaldo Especial', category: 'respaldos', description:'Medidas: de 80cm hasta 2.30mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i0.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/20151029_152807.jpg?fit=870%2C1110&ssl=1', stock:'number'},
    {id: 4, title:'Respaldo Colgante', category: 'respaldos', description:'Medidas: de 80cm hasta 2.10mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/20151024_171640.jpg?fit=870%2C1110&ssl=1', stock:'number'},
    {id: 4, title:'Respaldo Flotante', category: 'respaldos', description:'Medidas: de 80cm hasta 2.0mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i0.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/20160606_175955.jpg?fit=870%2C1110&ssl=1', stock:'number'}
  ]
  
  export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() => {
        return resolve(results);
      }, 2000)
    })
  
    return promise
  };