import { Inter } from "next/font/google";
import Layout from '@/layout/Layout';
import useQuiosco from '@/hooks/useQuiosco';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { categoriaActual } = useQuiosco()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className='font-bold text-4xl'>{categoriaActual?.nombre}</h1>
      <p className='my-2 text-2xl'>Elige y personaliza tu pedido a continuación</p>
    </Layout>
  );
}
