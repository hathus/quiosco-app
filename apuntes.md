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

Esto creará un archivo de configuración para el proveedor de base de datos seleccionado

