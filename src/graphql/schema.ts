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
    id: ID!
    status: UserStatus!
    name: String!
    email: String!
    books: [Book]!
    cards: [Card]!
  }
  
  type Book {
    id: ID!
    name: String
    stauts: BookStatus!
    userId: ID!
    user: User!
    cards: [Card]!
  }

  type Card {
    id: ID!
    status: CardStatus!
    english: String!
    japanese: String!
    memo: String
    userId: ID!
    user: User!
    bookId: ID!
    book: Book!
  }

  input BookInput {
    id: ID
    name: String
    status: BookStatus
    userId: ID!
  }

  input CardInput {
    id: ID
    status: CardStatus
    english: String
    japanese: String
    memo: String
    userId: ID!
    bookId: ID
  }

  type Query {
    getUser(id: ID!): User!
    getBook(id: String): String!
    getCard(id: ID!): Card!
    listBooks(filter: BookInput): [Book]!
    listCards(filter: CardInput): [Card]!
    test: String!
  }
`;
