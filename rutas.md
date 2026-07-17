# Ruta base (BASE_URL)
- https:/localhost:PUERTO/api/V1


# Historiales Rutas HTTP

## Get
- BASE_URL/historiales

## Post
- BASE_URL/historiales

### JSON POST
{
  "_id": {
    "$oid": "6a58f5a7476ca37f8db0bfcf"
  },
  "fecha": {
    "$date": "2026-07-16T00:00:00.000Z"
  },
  "diagnostico": "Otitis",
  "tratamiento": "Antibiótico por 7 días",
  "peso": 12.5,
  "mascota": {
    "$oid": "6a58f55b476ca37f8db0bfcc"
  },
}

## Put
- BASE_URL/historiales/:id

{
  "_id": {
    "$oid": "6a58f5a7476ca37f8db0bfcf"
  },
  "fecha": {
    "$date": "2026-07-16T00:00:00.000Z"
  },
  "diagnostico": "Otitis",
  "tratamiento": "Antibiótico por 7 días",
  "peso": 12.5,
  "mascota": {
    "$oid": "6a58f55b476ca37f8db0bfcc"
  },
}

## Delete
- BASE_URL/clientes/:id



# Clientes Rutas HTTP

## Get
- BASE_URL/clientes

## Post
- BASE_URL/clientes


{
  "_id": {
    "$oid": "6a58f42f476ca37f8db0bfc6"
  },
  "nombre": "Felipe Arandia",
  "cedula": "123456789",
  "telefono": "3001234567",
  "correo": "felipe@gmail.com",
  "estado": "pendiente",
}

## Put
- BASE_URL/clientes/:id

{
  "_id": {
    "$oid": "6a58f42f476ca37f8db0bfc6"
  },
  "nombre": "Felipe Arandia",
  "cedula": "123456789",
  "telefono": "3001234567",
  "correo": "felipe@gmail.com",
  "estado": "pendiente",
}

## Delete
- BASE_URL/clientes/:id



# Mascotas Rutas HTTP

## Get
- BASE_URL/clientes

## Post
- BASE_URL/clientes


{
  "_id": {
    "$oid": "6a58f42f476ca37f8db0bfc6"
  },
  "nombre": "Felipe Arandia",
  "cedula": "123456789",
  "telefono": "3001234567",
  "correo": "felipe@gmail.com",
  "estado": "pendiente",
}

## Put
- BASE_URL/clientes/:id

{
  "_id": {
    "$oid": "6a58f42f476ca37f8db0bfc6"
  },
  "nombre": "Felipe Arandia",
  "cedula": "123456789",
  "telefono": "3001234567",
  "correo": "felipe@gmail.com",
  "estado": "pendiente",
}

## Delete
- BASE_URL/clientes/:id

## Get
- BASE_URL/mascotas

## Post
- BASE_URL/mascotas

{
  "_id": {
    "$oid": "6a58f55b476ca37f8db0bfcc"
  },
  "nombre": "Michi",
  "especie": "Gato",
  "cliente": {
    "$oid": "6a58f479476ca37f8db0bfc8"
  },
  "createdAt": {
    "$date": "2026-07-16T15:14:35.885Z"
  },
  "updatedAt": {
    "$date": "2026-07-16T15:14:35.885Z"
  }
}

## Put
- BASE_URL/mascotas/:id

{
  "_id": {
    "$oid": "6a58f55b476ca37f8db0bfcc"
  },
  "nombre": "Michi",
  "especie": "Gato",
  "cliente": {
    "$oid": "6a58f479476ca37f8db0bfc8"
  },
  "createdAt": {
    "$date": "2026-07-16T15:14:35.885Z"
  },
  "updatedAt": {
    "$date": "2026-07-16T15:14:35.885Z"
  }
}

## Delete
- BASE_URL/mascotas/:id
