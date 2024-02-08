import Image from 'next/image'
import logo from '../../public/assets/img/logo.svg'

const Sidebar = () => {
  return (
    <>
        <Image width={150} src={logo} alt='logo quiosco' priority={true}/>
    </>
  )
}

export default Sidebar