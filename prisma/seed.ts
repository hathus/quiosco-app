import { categorias } from './data/categorias';
import { productos } from './data/productos';
import { PrismaClient } from '@prisma/client';

// Creamos una instancia de prisma client
const prisma = new PrismaClient()

// Creamos la función principal que hará la comunicación async con nuestra BD
const main = async () : Promise<void> => {
    try {
        await prisma.categoria.createMany({
            data: categorias
        })

        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.error(error)
    }
}

// Mandamos a llamar a nuestra función principal
main()