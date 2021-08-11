# REST API example application

Application providing a REST API to a database.

# REST API

The REST API to the example app is described below.

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