import Image from 'next/image'
import useQuiosco from '@/hooks/useQuiosco'

const Categoria = ({ categoria }) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco()

    const { id, icono, nombre } = categoria

    return (
        <div>
            <button
                type='button'
                className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} hover:bg-amber-400 w-full font-bold text-2xl flex items-center gap-5 border p-5`}
                onClick={() => handleClickCategoria(id)}
            >
                <Image alt='icono de categoria' width={70} height={70} src={`/assets/img/icono_${icono}.svg`} />
                {nombre}
            </button>
        </div>
    )
}

export default Categoria