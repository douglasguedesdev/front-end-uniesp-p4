import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VisualizaNoticia = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/noticias/${id}`

    const [visualizaNoticia, setVisualizaNoticia] = useState({})

    useEffect(() => {
        async function fetchData(){
          try {
            const res = await axios.get(url)
            setVisualizaNoticia(res.data)
          } catch(error){
            console.error("Erro ao buscar as notícias: ", error)
          }
        }
        fetchData()
    },  [])
    
  return (
    <div>
        <h2>{visualizaNoticia.titulo}</h2>
        <h3>{visualizaNoticia.subtitulo}</h3>
        <p>{visualizaNoticia.texto}</p>
    </div>
  )
}

export default VisualizaNoticia