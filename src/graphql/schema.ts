export const typeDefs = `
  enum BookStatus {
    FAVORITE
    IN_PROGRESS
    DONE
    DELETED
  }

  enum CardStatus {
    FAVORITE
    IN_PROGRESS
    DONE
    DELETED
  }

  enum UserStatus {
    NOT_AUTHENTICATED
    AUTHENTICATED
  }

  type User {
    id: String!
    status: UserStatus!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Book {
    id: String!
    name: String!
    status: BookStatus!
    userId: String!
    createdAt: String!
    updatedAt: String!
  }

  type Card {
    id: String!
    status: CardStatus!
    english: String
    japanese: String
    memo: String
    userId: String!
    bookId: String!
    createdAt: String!
    updatedAt: String!
  }

  input ListBookInput {
    id: String
    name: String
    status: BookStatus
    userId: String!
    createdAt: String
    updatedAt: String
  }

  input ListCardInput {
    id: String
    status: CardStatus
    english: String
    japanese: String
    memo: String
    userId: String!
    bookId: String
    createdAt: String
    updatedAt: String
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input CreateBookInput {
    name: String!
    status: BookStatus
    userId: String!
  }

  input CreateCardInput {
    status: CardStatus
    english: String
    japanese: String
    memo: String
    userId: String!
    bookId: String!
  }

  input UpdateBookInput {
    id: String!
    name: String!
    status: BookStatus
  }

  input UpdateCardInput {
    id: String!
    status: CardStatus
    english: String
    japanese: String
    memo: String
  }

  type Query {
    getUser(id: String!): User!
    getBook(id: String!): Book!
    getCard(id: String!): Card!
    listBooks(filter: ListBookInput): [Book]!
    listCards(filter: ListCardInput): [Card]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createBook(input: CreateBookInput!): Book!
    createCard(input: CreateCardInput!): Card!
    updateBook(input: UpdateBookInput!): Book!
    updateCard(input: UpdateCardInput!): Card!
    deleteBook(id: String!): Book!
    deleteCard(id: String!): Card!
  }
`;
