# Backend (ExpressJS)
#### Instalacion:
Dirijase a la carpeta frontend `cd backend` y ejecute el comando
````
npm install
````
#### Variables de Entorno
La aplicacion contiene variables globales de configuracion que explicaremos a continuacion:
  - `PORT` : Especifica el puerto al levantar nodeJS por defecto 3000
  - `REDIS_HOST` : Especifica el Host de la base de datos **`REDIS`**
  - `REDIS_SECRET` : Especifica la palabra secreta para el manejo de session en **`REDIS`**
#### Configuracion de JWT
debe copiar el archivo `environment_example.js` a `environment.js` en este se encuentra todo lo concerniente al JWT y el tiempo de la sesion
````
{
    "LilyMortyURL" : "https://rickandmortyapi.com/", 
    "limitSession" : "1200" , 
    "JWT" : {
        "secretKey": "MANTEQUILLA",
        "detail" : {
            "algorithm": "HS256",
            "expiresIn": "2m"
        }    
    }

}
````
#### Docker

Cree la imagen 
````
docker build -t  backend_rickmorty .
````
y luego ejecutar el comando :
 ````
docker run -p 3000:3000	-d  backend_rickmorty
 ````
