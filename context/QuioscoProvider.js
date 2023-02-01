import { useState, useEffect, createContext, use } from 'react'

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState({})

    useEffect(() => {

    }, [])

    return (
        <QuioscoContext.Provider
            value={{}}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export { QuioscoProvider }

export default QuioscoContext