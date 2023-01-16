import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Style from './api.module.css'
import Search from './../components/Search'

export default function Api() {
  const [personaje, setPersonaje] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const apiConection = 'https://rickandmortyapi.com/api/character'
    axios.get(apiConection).then((response) => {
      setPersonaje(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  return (
    <>
      <div className={Style.container}>
        <Search
          search={search}
          setSearch={setSearch}
          personaje={personaje}
          setPersonaje={setPersonaje}
        />
        {personaje.map((item) => {
          return (
            <div className={Style.containeCard}>
              <div className="card w-96 bg-zinc-800 shadow-xl">
                <figure>
                  <img src={item.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>Especie: {item.species}</p>
                  <p>Gender: {item.gender}</p>
                  <p>Location: {item.location.name}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
