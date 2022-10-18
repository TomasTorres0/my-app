import { useState } from "react";
import { Spinner } from "react-bootstrap";

const Condionales = () => {
  const [loading, setLoading] = useState(false);
  
  // #1 return temprano
  // if (loading) {
  //   return <h4>Cargando...</h4>
  // }

  // return (
  //   <h4>Carga completa</h4> 
  // );

  // #2 inline con frament
  // VARIAS CONDICIONES, CREAMOS VARIABLE DECLARATIVA showCargando
  // const firstCondition = true;
  // const secontCondition = true;
  // const thirdCondition = true;

  // const showCargando = (firstCondition && !secontCondition) || thirdCondition

  // return (
  //   <>
  //     {showCargando && <h4>Cargando...</h4>}
  //     {!showCargando && <h4>Carga completa</h4>}
  //   </>
  // )

  // #3 inline con ternary
  // return (
  //   <h4>
  //     {loading ? 'Cargando...' : 'Carga completa'}
  //   </h4>
  // )

  // props dinamicas
  const isBorder = false;
  const props = {
    role: 'status',
    animation: 'border'
  }

  if (!isBorder) {
    props.animation = 'grow'
  }

  return (
    <Spinner {...props}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
 
export default Condionales;