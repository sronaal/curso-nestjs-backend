<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo"/></a>
</p>

# Ejecutar en desarrollo

### 1. Clonar el repositorio
### 2. Ejecutar
```
yarn install
```
### 3. Tener Nest CLI Instalado
```
npm i -g @nestjs/cli
```
### 4. Levantar contendor docker
```
docker-compose up -d
```

### 5. Clonar el archivo __.env.template__ y renombrar la copia __.env__

### 6. Reconstruir la base de datos con seed


```
http://localhost:3000/api/v2/seed
```

### 7. Levantar MongoDB


### 8. Production Build

1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


## Stack Usado
* MongoDB
* Nest
* Docker
