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

  input BookInput {
    id: String
    name: String
    status: BookStatus
    userId: String!
    createdAt: String
    updatedAt: String
  }

  input CardInput {
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

  type Query {
    getUser(id: String!): User!
    getBook(id: String!): Book!
    getCard(id: String!): Card!
    listBooks(filter: BookInput): [Book]!
    listCards(filter: CardInput): [Card]!
  }
`;
