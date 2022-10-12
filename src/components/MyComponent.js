const exiteError = false;

const MyComponent = ({ value, name, saludar, children }) => {
  // console.log(value);
  // console.log(name);
  // console.log(children);
  // saludar();

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('Error: dato no encontrado'); // sale por el catch
      resolve({ id: 0, name: 'Pizza' }) // sale por el then
    }, 1000)
  })

  console.log(task); // OPCION A

  task
    .then((result) => {
      console.log(result); // OPCION B
      // setProduct(result) // MOSTRAR DATOS EN JSX
    })
    .catch((error) => {
      console.warn(error);
    })
    .finally(() => {
      console.log('Promesa finalizada');
    })

  return (
    <>
      <h1>Este es mi componente {name}</h1>
      {children}
    </>
  )
};

export default MyComponent;