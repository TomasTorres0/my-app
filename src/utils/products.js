import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

const products = [
  {id: 1, title:' - Sillon Altobello - ', category: 'sillones', description:'Medidas: de 1.60mts hasta 2.00mts',color:'Claros - Oscuros - Abstractos', price: 100, pictureUrl: 'https://i2.wp.com/diforteliving.com.ar/wp-content/uploads/2016/11/ALTOBELLO.jpg?fit=600%2C600&ssl=1', stock: 10},
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

export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}
