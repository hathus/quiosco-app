import Image from 'next/image'
import useQuiosco from '@/hooks/useQuiosco'
import Categoria from './Categoria'

const Sidebar = () => {

    const { categorias } = useQuiosco()

    return (
        <>
            <div className='flex flex-row justify-center'>
                <Image width={180} height={75} src='/assets/img/logo.svg' alt='Imagen Logo' />
            </div>
            <nav className='mt-10'>
                {categorias.map(categoria => (
                    <Categoria key={categoria.id} categoria={categoria} />
                ))}
            </nav>
        </>
    )
}

export default Sidebar