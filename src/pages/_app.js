import "@/styles/globals.css";
import { QuioscoProvider } from '@/context/QuioscoProvider';

export default function App({ Component, pageProps }) {
  return (
    // modificamos estas lineas para poner el provider en context
    // esto permitirá tener acceso a los datos como props
    <QuioscoProvider>
      <Component {...pageProps} />;
    </QuioscoProvider>
  )
}
