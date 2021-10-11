# Bienvenid@ a la web HarBest Market

En **HarBest Market** podrás encontrar los mejores productos de la huerta a tu casa.

**HarBest Market**, tu mejor oportunidad para comprar frutas y verduras frescas directamente de la huerta | Conectamos a TU restaurante con pequeños agricultores |.

<img src='https://res.cloudinary.com/jorgemaram/image/upload/v1633914993/Harbest/peter-wendt--r5KSMkyoSc-unsplash_tztrkx.jpg' alt='painting' height='450'>

## Tabla de endpoints en servidor

| Id | Método | Ruta | Descripción |
| ------ | ------ | ------ | ------ |
| 1 | post | /api/auth/signup | Envía la información de un nuevo usuario a la base de datos y se registra dicho usuario |
| 2 | get | /api/auth/loggedIn | Muestra registro de usuario |
| 3 | post | /api/auth/login | Permite a un usuario iniciar sesión |
| 4 | post | /api/auth/logout | Permite a un usuario finalizar sesión |
| 5 | get | /api/products/getAllProducts | Muestra los diferentes productos de la base de datos |
| 6 | get | /api/products/getOneProduct/:product_id | Muestra los detalles de un producto |
| 7 | post | /api/products/newProduct | Envía la información de un producto nuevo a la base de datos |
| 8 | put | /api/products/editProduct/:product_id | Envía el formulario de edición del producto a la base de datos |
| 9 | delete | /api/products/deleteProduct/:product_id | Borra un producto de la base de datos |
| 10 | get | /api/user/getAllUser | Muestra los diferentes usuarios de la base de datos |
| 11 | get | /api/user/getOneUser/:user_id | Muestra los detalles de un usuario |
| 12 | delete | /api/user/deleteUser/:user_id | Borra los detalles de un usuario de la base de datos |
| 13 | post | /api/files/upload | Permite cargar la imagen a través de Cloudinary de los archivos subidos para los registros |

## Tabla de rutas de acceso cliente

| Id | Ruta | Información vista |
| ------ | ------ | ------ |
| 1 | / | Muestra la home principal de la web |
| 2 | /registro | Vista con el formulario de alta de nuevos usuarios |
| 3 | /acceso-usuario | Vista con formulario para inicio de sesión |
| 4 | /productos | Vista de la lista de los productos de la base de datos (en caso de que esté registrado el usuario, muestra todos los productos, en caso de que no esté registrado, solo muestra los productos "En stock" (activos) en la base de datos) |
| 5 | /productos/crear | Muestra formulario de alta de un nuevo producto |
| 6 | /productos/editar/:product_id | Muestra formulario de edición para un producto existente |
| 7 | /productos/:product_id | Muestra vista de los detalles de un producto |

### Instrucciones
En primer lugar, realiza `fork` y `clone` sobre este repositorio.

#### Cliente
- Acceder a la carpeta `client` del repositorio y desde ahí en la terminar ejecutar los siguientes comandos:

```bash
$ npm install
$ npm start

```
Una vez esté realizado, se ejecutará el cliente en el `puerto 3000` mediante <http://localhost:3000/> .

#### Servidor
- Acceder a la carpeta `server` del repositorio y desde ahí en la terminar ejecutar los siguientes comandos:

```bash
$ npm install
$ npm run dev

```
Una vez esté realizado, se conectará con la base de datos de Mongo Atlas. 

### Manejo de la web

- Algunas de las rutas están protegidas. En caso de que necesites acceder a las mismas puedes hacer inicio de sesión con el usuario `Admin` y la contraseña `1234` .

##### Tecnologías empleadas

- HTML5
- CSS
- JavaScript
- React
- MongoDB
- Passport
- Cloudinary
- AXIOS
- React Bootstrap