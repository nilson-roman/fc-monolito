# Full Cycle Monolith API Creation
This project is a fork of the Full Cycle fc-monolito repository:

```sh
https://github.com/devfullcycle/fc-monolito
```

In this challenge, my goal is to establish endpoints that enable users to make purchases, and to conduct end-to-end tests for each endpoint to ensure functionality across all scenarios.

## Installation

To install the software, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/nilson-roman/fc-monolito
```

2. Change into the project directory:

```sh
cd fc-monolito
```

3. Install the dependencies:

```sh
npm install
```

## Running Tests
To execute the tests for the challenge, run the following command:

```sh
npm test
```

Here are a few examples illustrating how the system could be used:

## Start the server:

```sh
npm run dev
```


### POST /clients
```sh
curl  -X POST \
  'http://localhost:3000/clients' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "id": "1",
    "name": "John",
    "email": "john@email.com",
    "document": "a124e",
    "address": {
        "street": "street",
        "number": "1234",
        "complement": "complement",
        "city": "city",
        "state": "state",
        "zipCode": "zipCode"
    }
}'
```

### POST /products
```sh
curl  -X POST \
  'http://localhost:3000/products' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "id": "1",
    "name": "product",
    "description": "description",
    "salesPrice": 100.00,
    "purchasePrice": 10.00,
    "stock": 10
  }'
```

### POST /checkout/
```sh
curl  -X POST \
  'http://localhost:3000/checkout' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "clientId": "1",
  "products": [
      { "productId": "1" }
    ]
}'
```

### GET /invoice/<id>
The identifier **"3d9bd843-0a1e-4989-823c-6179ebc41fa6"** is purely fictional and serves as a placeholder in this context.
```sh
curl  -X GET \
  'http://localhost:3000/invoice/3d9bd843-0a1e-4989-823c-6179ebc41fa6' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)'
```

## Technology
- Node.js version: 14 lts;