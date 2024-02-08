# Apuntes de NextJS

## Creando la aplicación

Para crear la aplicación abrimos una terminal y escribimos

```bash
npx create-next-app@latest
```

Nos pedirá algunas configuraciones para poder usar las características anteriores o las nuevas características esta app será desarrollada en la base antigua.

## Instalando y Prisma

En la terminal escribimos las siguientes instrucciones

La primera es para el entorno de desarrollo, por eso utilizamos el modificador -D en la instrucción

```bash
npm i -D prisma
```

Ahora instalamos la dependencia de prisma para producción

```bash
npm i @prisma/client
```

Una vez instaladas las dependencias de prisma para desarrollo y producción, ahora procedemos a inicializar las configuraciones, usaremos el modificador --datasource-provider e indicamos que servidor de bases de datos vamos a usar, en este caso se usara mariadb.

```bash
npx prisma init --datasource-provider mysql
```

Esto creará un archivo de configuración para el proveedor de base de datos seleccionado, abrimos los archivos recién creados y configuramos las credenciales en el archivo .env

Una vez hecho esto abrimos el archivo schema.prisma que se encuentra en la carpeta de prisma y empezaremos a trabajar en el modelado de los datos

Así queda el modelado de categorías y productos

```javascript
model Producto {
  id          Int       @id @default(autoincrement())
  nombre      String
  precio      Float
  imagen      String?
  categoriaId Int
  categoria   Categoria @relation(fields: [categoriaId], references: [id])
}

model Categoria {
  id        Int        @id @default(autoincrement())
  nombre    String
  icono     String?
  productos Producto[]
}
```

Ahora ejecutamos una migración de estos modelos para que sean creados en la BD, ejecutamos el siguiente comando en la terminal

```bash
npx prisma migrate dev
```

Nos pedirá un nombre de la migración y este será el nombre de la migración en la carpeta de prisma

Agregamos el modelo de ordenes

```javascript
model Orden {
  id Int @id @default(autoincrement())
  nombre String
  fecha String
  total Float
  pedido Json
}
```

Y ejecutamos el comando de migración y le damos un nombre a la migración de ordenes

Ahora crearemos un archivo de seeding de datos para nuestros modelos creados, para ello creamos la carpeta data dentro de prisma y dentro de esta carpeta creamos dos archivos uno llamado categorías.ts y el otro productos.ts, en cada uno de ellos irá un arreglo de objetos que será la información que tendrán nuestras tablas en la base de datos.

Después de crearemos un archivo dentro de la carpeta de prisma que se llama seed.ts que contendrá lo sigueinte:

```javascript
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
```

Ahora necesitamos instalar una dependencia para poder usar este comando en prisma desde la terminal, para ello instalamos la siguiente dependencia

```bash
npm i ts-node
```

Una vez hecho esto abrimos el package.json y pondremos lo siguiente en el debajo de scripts

```json
"prisma": {
    "seed" : "ts-node prisma/seed.ts"
}
```

Ahora ejecutamos el comando de la siguiente manera

```bash
npx prisma db seed
```

