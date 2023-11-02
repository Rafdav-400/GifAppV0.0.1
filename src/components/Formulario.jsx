import { Errors } from "./Errors";
import { useState } from 'react';

export const Formulario = ({busqueda,setBusqueda,colecciones,setColecciones}) => {
    const [errors1, setErrors1] = useState(false)
    const [errors2, setErrors2] = useState(false)
    const [errors3, setErrors3] = useState(false)
    const onSubmit=(e)=>{
      e.preventDefault();
      if (busqueda.length <= 2) {
        setErrors1(true)
        setErrors2(false)
        setErrors3(false)
        return
      }
      if (colecciones.includes(busqueda.trim())) {
        setErrors2(true)
        setErrors1(false)
        setErrors3(false)
        return
      }
      if (busqueda.length > 15) {
        setErrors3(true)
        setErrors1(false)
        setErrors2(false)
        return
      }
      
      setColecciones([busqueda,...colecciones])
      setBusqueda("")
      setErrors1(false)
      setErrors2(false)
      setErrors3(false)
      
    }
    const onChange=(e)=>{
      setBusqueda(e.target.value);
    }
  return (
    <form 
          className='formulario'
          onSubmit={onSubmit}
        >
          <input 
            type="search"
            className='buscador'
            onChange={onChange}
            value={busqueda}
          />
          {
            errors1 && <Errors 
                        mensaje="Debes tener + de 2 caracteres"
                      />
          }
          {
            errors2 && <Errors 
                        mensaje="No se pueden repetir elementos"
                      />
          }
          {
            errors3 && <Errors 
                        mensaje="No puedes introducir + de 15 caracteres"
                      />
          }
        </form>
  )
}
