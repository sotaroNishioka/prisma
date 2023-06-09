import { GraphQLResolveInfo } from "graphql";
import { ApolloContext } from "@/graphql/context";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Book = {
  __typename?: "Book";
  createdAt: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  status: BookStatus;
  updatedAt: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
};

export type BookStatus =
  | "DELETED"
  | "DONE"
  | "FAVORITE"
  | "IN_PROGRESS"
  | "%future added value";

export type Card = {
  __typename?: "Card";
  bookId: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  english?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  japanese?: Maybe<Scalars["String"]["output"]>;
  memo?: Maybe<Scalars["String"]["output"]>;
  status: CardStatus;
  updatedAt: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
};

export type CardStatus =
  | "DELETED"
  | "DONE"
  | "FAVORITE"
  | "IN_PROGRESS"
  | "%future added value";

export type CreateBookInput = {
  name: Scalars["String"]["input"];
  status?: InputMaybe<BookStatus>;
  userId: Scalars["String"]["input"];
};

export type CreateCardInput = {
  bookId: Scalars["String"]["input"];
  english?: InputMaybe<Scalars["String"]["input"]>;
  japanese?: InputMaybe<Scalars["String"]["input"]>;
  memo?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CardStatus>;
  userId: Scalars["String"]["input"];
};

export type CreateUserInput = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type ListBookInput = {
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<BookStatus>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["String"]["input"];
};

export type ListCardInput = {
  bookId?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  english?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  japanese?: InputMaybe<Scalars["String"]["input"]>;
  memo?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CardStatus>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBook: Book;
  createCard: Card;
  createUser: User;
  deleteBook: Book;
  deleteCard: Card;
  updateBook: Book;
  updateCard: Card;
};

export type MutationCreateBookArgs = {
  input: CreateBookInput;
};

export type MutationCreateCardArgs = {
  input: CreateCardInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteBookArgs = {
  id: Scalars["String"]["input"];
};

export type MutationDeleteCardArgs = {
  id: Scalars["String"]["input"];
};

export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};

export type MutationUpdateCardArgs = {
  input: UpdateCardInput;
};

export type Query = {
  __typename?: "Query";
  getBook: Book;
  getCard: Card;
  getUser: User;
  listBooks: Array<Maybe<Book>>;
  listCards: Array<Maybe<Card>>;
};

export type QueryGetBookArgs = {
  id: Scalars["String"]["input"];
};

export type QueryGetCardArgs = {
  id: Scalars["String"]["input"];
};

export type QueryGetUserArgs = {
  id: Scalars["String"]["input"];
};

export type QueryListBooksArgs = {
  filter?: InputMaybe<ListBookInput>;
};

export type QueryListCardsArgs = {
  filter?: InputMaybe<ListCardInput>;
};

export type UpdateBookInput = {
  id: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  status?: InputMaybe<BookStatus>;
};

export type UpdateCardInput = {
  english?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  japanese?: InputMaybe<Scalars["String"]["input"]>;
  memo?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<CardStatus>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  status: UserStatus;
  updatedAt: Scalars["String"]["output"];
};

export type UserStatus =
  | "AUTHENTICATED"
  | "NOT_AUTHENTICATED"
  | "%future added value";

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<Book>;
  BookStatus: BookStatus;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Card: ResolverTypeWrapper<Card>;
  CardStatus: CardStatus;
  CreateBookInput: CreateBookInput;
  CreateCardInput: CreateCardInput;
  CreateUserInput: CreateUserInput;
  ListBookInput: ListBookInput;
  ListCardInput: ListCardInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  UpdateBookInput: UpdateBookInput;
  UpdateCardInput: UpdateCardInput;
  User: ResolverTypeWrapper<User>;
  UserStatus: UserStatus;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: Book;
  Boolean: Scalars["Boolean"]["output"];
  Card: Card;
  CreateBookInput: CreateBookInput;
  CreateCardInput: CreateCardInput;
  CreateUserInput: CreateUserInput;
  ListBookInput: ListBookInput;
  ListCardInput: ListCardInput;
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  UpdateBookInput: UpdateBookInput;
  UpdateCardInput: UpdateCardInput;
  User: User;
};

export type BookResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Book"] = ResolversParentTypes["Book"]
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["BookStatus"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Card"] = ResolversParentTypes["Card"]
> = {
  bookId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  english?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  japanese?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes["CardStatus"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createBook?: Resolver<
    ResolversTypes["Book"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateBookArgs, "input">
  >;
  createCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCardArgs, "input">
  >;
  createUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "input">
  >;
  deleteBook?: Resolver<
    ResolversTypes["Book"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBookArgs, "id">
  >;
  deleteCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCardArgs, "id">
  >;
  updateBook?: Resolver<
    ResolversTypes["Book"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBookArgs, "input">
  >;
  updateCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCardArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  getBook?: Resolver<
    ResolversTypes["Book"],
    ParentType,
    ContextType,
    RequireFields<QueryGetBookArgs, "id">
  >;
  getCard?: Resolver<
    ResolversTypes["Card"],
    ParentType,
    ContextType,
    RequireFields<QueryGetCardArgs, "id">
  >;
  getUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryGetUserArgs, "id">
  >;
  listBooks?: Resolver<
    Array<Maybe<ResolversTypes["Book"]>>,
    ParentType,
    ContextType,
    Partial<QueryListBooksArgs>
  >;
  listCards?: Resolver<
    Array<Maybe<ResolversTypes["Card"]>>,
    ParentType,
    ContextType,
    Partial<QueryListCardsArgs>
  >;
};

export type UserResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["UserStatus"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ApolloContext> = {
  Book?: BookResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
