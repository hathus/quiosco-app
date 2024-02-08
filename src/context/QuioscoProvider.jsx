import {useState, useEffect, createContext} from 'react'

// Se crea el context del quiosco
const QuioscoContext = createContext()

// Se crea el provider del quiosco
const QuioscoProvider = ({children}) => {
    return (
        <QuioscoContext.Provider value={{

        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext