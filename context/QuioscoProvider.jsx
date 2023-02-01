import { useState, useEffect, createContext, use } from 'react'
import axios from 'axios'

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    // Función que obtiene las categorías de la base de datos con axios
    const obtenerCategorias = async () => {
        try {
            const { data } = await axios.get('/api/categorias')
            setCategorias(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    // Effect que obtiene las categorias de la bd
    useEffect(() => {
        obtenerCategorias()
    }, [])

    // Effect que selecciona la categoría por default en el sidebar
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    // Función que cambia el resaltado de la categoría actual
    const handleClickCategoria = id => {
        const categoria = categorias.filter(c => c.id === id)
        setCategoriaActual(categoria[0])
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export { QuioscoProvider }

export default QuioscoContext