import Image from 'next/image'
import { formatCurrency } from '@/helpers'
import useQuiosco from '@/hooks/useQuiosco'

const Producto = ({ producto }) => {

    const { handleSetProducto } = useQuiosco()

    const { nombre, imagen, precio } = producto

    return (
        <div
            className='border p-3'
        >
            <Image
                alt={`Imagen de ${nombre}`}
                src={`/assets/img/${imagen}.jpg`}
                width={300}
                height={150}
            />
            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500 w-full text-center'>
                    MXN {formatCurrency(precio)}
                </p>
            </div>
            <button type='button'
                className='bg-indigo-600 hover:bg-indigo-800 text-white uppercase p-3 mt-5 w-full font-bold rounded'
                onClick={() => handleSetProducto(producto)}
            >
                Agregar
            </button>
        </div>
    )
}

export default Producto