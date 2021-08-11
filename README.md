# REST API example application

Application providing a REST API to a database.

# REST API

The REST API to the example app is described below.

# Installation

`Download Project`

    git clone https://github.com/GroovyHooked/Nest-JS_REST_API

`Install dependencies`

    npm install

`Run the application`

    npm run start

## Get list of Things

### Request

`GET All Scooters`

    curl -X 'GET' 'http://localhost:3000/scooters' -H 'accept: */*'

### Response

     connection: keep-alive  
     content-length: 641  
     content-type: application/json; charset=utf-8  
     date: Wed,11 Aug 2021 07:43:54 GMT  
     etag: W/"281-AR3pn7GE8Cxb3gOCGNOaQ+aHZlE"  
     keep-alive: timeout=5  
     x-powered-by: Express 

    []

## Create a single Scooter

### Request

`Post 1 Scooter`

    curl -X 'POST' 'http://localhost:3000/scooters' \
      -H 'accept: */*' \
      -H 'Content-Type: application/json' \
      -d '{
      "name": "string",
      "motorization": 0,
      "brand": "string",
      "model": "string",
      "mileage": 0,
      "repairs": [
        "string"
      ]
    }'

### Response

    connection: keep-alive 
    content-length: 0 
    date: Wed,11 Aug 2021 10:38:28 GMT 
    keep-alive: timeout=5 
    x-powered-by: Express 

## Get a specific Scooter with his Repairs

### Request

`GET /scooters/{id}?withRepairs={id}`

    curl -i -H 'Accept: application/json' http://localhost:7000/1?withRepairs=1

### Response

    Connection	keep-alive
    Content-Length	100
    Content-Type	application/json; charset=utf-8
    Date	Wed, 11 Aug 2021 10:05:48 GMT
    ETag	W/"64-TFXUmrht64EVm0v7ZZu8EAY4rYg"
    Keep-Alive	timeout=5
    X-Powered-By	Express

    {
        "id": 1,
        "name": "string",
        "motorization": 0,
        "brand": "string",
        "model": "string",
        "mileage": 0,
        "repairs": [
            {
            "id": 1,
            "shortname": "string",
            "description": "string",
            "price": 10,
            "scooterId": 1
            }
        ]
    }