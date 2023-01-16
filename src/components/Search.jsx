import React from 'react'
import Style from './search.module.css'

const Search = ({ search, setSearch, personaje, setPersonaje }) => {
  const handleInput = (e) => {
    filtrar(e.target.value)
  }
  const filtrar = (terminoBusqueda) => {
    let resultadoBusqueda = personaje.filter((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return element
      }
    })
    setPersonaje(resultadoBusqueda)
  }
  return (
    <>
      <div className={Style.container}>
        <div className={Style.input}>
          <input type="text" onChange={handleInput} placeholder="Search" />
        </div>
      </div>
    </>
  )
}

export default Search
