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

