import React, { useState } from 'react'
import { Formulario } from './components/Formulario';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {
    const [busqueda, setBusqueda] = useState("")
    const [colecciones, setColecciones] = useState([])
  return (
    <div>
      <h1>GifApp</h1>
      <hr />
        <Formulario 
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          colecciones={colecciones}
          setColecciones={setColecciones}
        />
      {
        colecciones.map(category=>{
          return (
            <div>
              <h1>{category}</h1>
              <GifGrid 
                key={category+"a1"}
                category={category}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default GifApp