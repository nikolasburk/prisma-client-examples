# Prisma Client Examples

This repository contains the service configuration for a simple Prisma Service and demonstrates how tghe Prisma Client is generated.

You can view the generated clients in the `generated` directory:

- [Prisma Client for JavaScript](./generated/prisma.js)
- [Prisma Client for TypeScript](./generated/prisma.ts)
- [GraphQL schema of Prisma API](./generated/prisma.graphql)

The clients are generated using the `prisma generate` command. This commands reads the information that's specified under the `generate` property in [prisma.yml](prisma.yml):

```yml
endpoint: http://localhost:4466
datamodel: datamodel.graphql

generate:
  - generator: typescript
    output: ./generated/prisma.ts
  - generator: javascript
    output: ./generated/prisma.js
  - generator: schema
    output: ./generated/prisma.graphql
```

The Prisma Service is based on the following [data model](./datamodel.graphql):

```graphql
type Link {
  id: ID! @unique
  createdAt: DateTime!
  description: String!
  url: String!
  postedBy: User
  votes: [Vote!]!
}

type User {
  id: ID! @unique
  name: String!
  email: String! @unique
  password: String!
  links: [Link!]!
  votes: [Vote!]!
}

type Vote {
  id: ID! @unique
  link: Link!
  user: User!
}
```

## Usage

To be sure you're seeing the latest version of the clients, you can re-generate them yourself using the following steps:

### 1. Install Prisma

```bash
npm install prisma
```

### 2. Start Prisma Server (requires Docker)

```bash
docker-compose up -d
```

### 3. Deploy Prisma Service

```bash
prisma deploy
```

### 4. Re-generate Prisma Clients & GraphQL schema

```bash
prisma generate
```

This updates the following files, as specified in [prisma.yml](prisma.yml):

- [`./generated/prisma.js`](./generated/prisma.js)
- [`./generated/prisma.ts`](./generated/prisma.ts)
- [`./generated/prisma.graphql`](./generated/prisma.graphql)
