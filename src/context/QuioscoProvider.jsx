import { useState, useEffect, createContext } from 'react'
// Importamos axios para crear el primer state
import axios from 'axios'

// Se crea el context del quiosco
const QuioscoContext = createContext()

// Se crea el provider del quiosco
const QuioscoProvider = ({ children }) => {

    // Creamos el state de categorias
    const [categorias, setCategorias] = useState([])

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

    return (
        <QuioscoContext.Provider value={{
            categorias,
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext