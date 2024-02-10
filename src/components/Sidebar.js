import Image from 'next/image'
import logo from '../../public/assets/img/logo.svg'
// Importamos el hook de quiosco
import useQuiosco from '@/hooks/useQuiosco'
import Categoria from './Categoria'

const Sidebar = () => {
  // Mandamos a llamar el hook para acceder a la categorías
  const { categorias } = useQuiosco()

  return (
    <>
      <Image width={150} src={logo} alt='logo quiosco' priority={true} />

      <nav className='mt-10'>
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </nav>

    </>
  )
}

export default Sidebar