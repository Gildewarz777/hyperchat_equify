# Hyperchat by Kyo

Chat API service coded with Node.js using Express and GraphQL coded in ES6
GraphiQL UI accessible through the /graphiql URL
Apollo Engine plateform accessible through author account services

## Getting started

### Prequisites

Have Node.js installed. For the Apollo Server plateform have an account and demand permissions on the service.

### Installing

Install all packages:

``` cmd
npm install
```

### Run the app

Currently running on localhost:4000

``` cmd
npm start
```

## API

### Queries

- getMessages(room: String!, since: Int): [Message!]

```graphql
query{
  getMessage(room:"1"){
    id
    message
  }
}
```

```graphql
query{
  getMessage(room:"1", since: 1){
    id
    message
  }
}
```

### Mutations

- postMessage(message: String!, room: String!, userHash: String): Message!

```graphql
mutation{
  postMessage(message: "hello", userHash:"lalala", room:"3"){
    message
    userHash
    room
  }
}
```

## Built with

- Express.js
- Apollo
- GraphQL
