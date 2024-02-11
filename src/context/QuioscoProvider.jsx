import { useState, useEffect, createContext } from 'react'
// Importamos axios para crear el primer state
import axios from 'axios'

// Se crea el context del quiosco
const QuioscoContext = createContext()

// Se crea el provider del quiosco
const QuioscoProvider = ({ children }) => {

    // Creamos el state de categorias
    const [categorias, setCategorias] = useState([])
    // creamos otro state para detectar la categoria actual
    const [categoriaActual, setCategoriaActual] = useState({})

    // Ahora hacemos una llamada inicial con useEffect
    const obtenerCategorias = async () => {
        try {
            const { data } = await axios('/api/categorias')
            setCategorias(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    // creamos una función para manejar el click y pasar el id
    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext