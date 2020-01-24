## Frontend(ReactJS)
#### Instalacion:
Dirijase a la carpeta frontend `cd frontend` y ejecute el comando
````
npm install
````
#### Configuracion de la API
el archivo de configuracion se encuentra en  `/src/enviroment.json` por defecto tiene configurada el api  del contenedor backend
#### Docker

Cree la imagen 
````
docker build -t  fronted_rickmorty .
````
y luego ejecutar el comando :
 ````
docker run -p 80:80	-d  fronted_rickmorty
 ````
