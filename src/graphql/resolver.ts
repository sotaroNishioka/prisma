import { Resolvers } from "./generated/api/graphql";

export const resolvers: Resolvers = {
  Query: {
    getUser: async (_, args, contextValue, __) => {
      if (!args.id) {
        throw new Error("id is required");
      }
      const res = await contextValue.prisma.user.findUnique({
        where: { id: args.id },
      });
      if (!res) {
        throw new Error("user not found");
      }
      return {
        id: res.id,
        email: res.email,
        name: res.name,
        status: res.status,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    getBook: async (_, args, contextValue, __) => {
      if (!args.id) {
        throw new Error("id is required");
      }
      const res = await contextValue.prisma.book.findUnique({
        where: { id: args.id },
        include: { cards: true, user: true },
      });
      if (!res) {
        throw new Error("user not found");
      }
      return {
        id: res.id,
        name: res.name,
        status: res.status,
        userId: res.user_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    getCard: async (_, args, contextValue, __) => {
      if (!args.id) {
        throw new Error("id is required");
      }
      const res = await contextValue.prisma.card.findUnique({
        where: { id: args.id },
      });
      if (!res) {
        throw new Error("user not found");
      }
      return {
        id: res.id,
        status: res.status,
        english: res.english,
        japanese: res.japanese,
        memo: res.memo,
        userId: res.user_id,
        bookId: res.book_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },

    listBooks: async (_, args, contextValue, __) => {
      if (!args.filter) {
        throw new Error("filter is required");
      }
      const res = await contextValue.prisma.book.findMany({
        where: {
          AND: [
            args.filter.id ? { id: args.filter.id } : {},
            args.filter.name ? { name: args.filter.name } : {},
            args.filter.userId ? { user_id: args.filter.userId } : {},
            args.filter.status && args.filter.status !== "%future added value"
              ? { status: args.filter.status }
              : {},
            args.filter.createdAt
              ? { created_at: new Date(args.filter.createdAt) }
              : {},
            args.filter.updatedAt
              ? { updated_at: new Date(args.filter.updatedAt) }
              : {},
          ],
        },
      });
      return res.map((book) => ({
        id: book.id,
        name: book.name,
        status: book.status,
        userId: book.user_id,
        createdAt: book.created_at.toISOString(),
        updatedAt: book.updated_at.toISOString(),
      }));
    },
    listCards: async (_, args, contextValue, __) => {
      if (!args.filter) {
        throw new Error("filter is required");
      }
      const res = await contextValue.prisma.card.findMany({
        where: {
          AND: [
            args.filter.id ? { id: args.filter.id } : {},
            args.filter.english ? { english: args.filter.english } : {},
            args.filter.japanese ? { japanese: args.filter.japanese } : {},
            args.filter.memo ? { memo: args.filter.memo } : {},
            args.filter.userId ? { user_id: args.filter.userId } : {},
            args.filter.bookId ? { book_id: args.filter.bookId } : {},
            args.filter.status && args.filter.status !== "%future added value"
              ? { status: args.filter.status }
              : {},
            args.filter.createdAt
              ? { created_at: new Date(args.filter.createdAt) }
              : {},
            args.filter.updatedAt
              ? { updated_at: new Date(args.filter.updatedAt) }
              : {},
          ],
        },
      });
      return res.map((card) => ({
        id: card.id,
        status: card.status,
        english: card.english,
        japanese: card.japanese,
        memo: card.memo,
        userId: card.user_id,
        bookId: card.book_id,
        createdAt: card.created_at.toISOString(),
        updatedAt: card.updated_at.toISOString(),
      }));
    },
  },
  Mutation: {
    createUser: async (_, args, contextValue, __) => {
      if (!args.input) {
        throw new Error("input is required");
      }
      const res = await contextValue.prisma.user.create({
        data: {
          email: args.input.email,
          name: args.input.name,
        },
      });
      return {
        id: res.id,
        email: res.email,
        name: res.name,
        status: res.status,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    createBook: async (_, args, contextValue, __) => {
      if (!args.input) {
        throw new Error("input is required");
      }
      const res = await contextValue.prisma.book.create({
        data: {
          name: args.input.name,
          status:
            args.input.status === "%future added value" ||
            args.input.status === null
              ? undefined
              : args.input.status,
          user_id: args.input.userId,
        },
      });
      return {
        id: res.id,
        name: res.name,
        status: res.status,
        userId: res.user_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    createCard: async (_, args, contextValue, __) => {
      if (!args.input) {
        throw new Error("input is required");
      }
      const res = await contextValue.prisma.card.create({
        data: {
          status:
            args.input.status === "%future added value" ||
            args.input.status === null
              ? undefined
              : args.input.status,
          english: args.input.english,
          japanese: args.input.japanese,
          memo: args.input.memo,
          user_id: args.input.userId,
          book_id: args.input.bookId,
        },
      });
      return {
        id: res.id,
        status: res.status,
        english: res.english,
        japanese: res.japanese,
        memo: res.memo,
        userId: res.user_id,
        bookId: res.book_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    updateBook: async (_, args, contextValue, __) => {
      if (!args.input) {
        throw new Error("input is required");
      }
      const res = await contextValue.prisma.book.update({
        where: { id: args.input.id },
        data: {
          name: args.input.name,
          status:
            args.input.status === "%future added value" ||
            args.input.status === null
              ? undefined
              : args.input.status,
        },
      });
      return {
        id: res.id,
        name: res.name,
        status: res.status,
        userId: res.user_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    updateCard: async (_, args, contextValue, __) => {
      if (!args.input) {
        throw new Error("input is required");
      }
      const res = await contextValue.prisma.card.update({
        where: { id: args.input.id },
        data: {
          status:
            args.input.status === "%future added value" ||
            args.input.status === null
              ? undefined
              : args.input.status,
          english: args.input.english,
          japanese: args.input.japanese,
          memo: args.input.memo,
        },
      });
      return {
        id: res.id,
        status: res.status,
        english: res.english,
        japanese: res.japanese,
        memo: res.memo,
        userId: res.user_id,
        bookId: res.book_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    deleteBook: async (_, args, contextValue, __) => {
      if (!args.id) {
        throw new Error("id is required");
      }
      const res = await contextValue.prisma.book.update({
        where: { id: args.id },
        data: { status: "DELETED" },
      });
      return {
        id: res.id,
        name: res.name,
        status: res.status,
        userId: res.user_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
    deleteCard: async (_, args, contextValue, __) => {
      if (!args.id) {
        throw new Error("id is required");
      }
      const res = await contextValue.prisma.card.update({
        where: { id: args.id },
        data: { status: "DELETED" },
      });
      return {
        id: res.id,
        status: res.status,
        english: res.english,
        japanese: res.japanese,
        memo: res.memo,
        userId: res.user_id,
        bookId: res.book_id,
        createdAt: res.created_at.toISOString(),
        updatedAt: res.updated_at.toISOString(),
      };
    },
  },
};
