import { useContext } from 'react';
import QuioscoContext from '@/context/QuioscoProvider';

// este es el nombre del hook
const useQuiosco = () => {
    // usamos useContext para retornar el quiosco context
    return useContext(QuioscoContext)
}

export default useQuiosco