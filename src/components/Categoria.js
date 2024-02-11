import Image from 'next/image'
// Importamos el hook para poder usar el handle
import useQuiosco from '@/hooks/useQuiosco'

export default function Categoria({ categoria }) {

    const { nombre, icono, id } = categoria
    const { categoriaActual, handleClickCategoria } = useQuiosco()

    return (
        <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} 
            flex items-center gap-2 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
            onClick={() => handleClickCategoria(id)}
        >
            <Image alt='Imagen del logo'
                width={70}
                height={70}
                src={`/assets/img/icono_${icono}.svg`}
            />
            <button type='button' className='text-2xl font-bold'>
                {nombre}
            </button>
        </div>
    )
}