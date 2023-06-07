// export const resolvers = {
//   Query: {
//     links: () => {
//       return [
//         {
//           category: "Open Source",
//           description: "Fullstack React framework",
//           id: "8a9020b2-363b-4a4f-ad26-d6d55b51bqes",
//           imageUrl: "https://nextjs.org/static/twitter-cards/home.jpg",
//           title: "Next.js",
//           url: "https://nextjs.org",
//         },
//         {
//           category: "Open Source",
//           description: "Next Generation ORM for TypeScript and JavaScript",
//           id: "2a3121b2-363b-4a4f-ad26-d6c35b41bade",
//           imageUrl: "https://www.prisma.io/images/og-image.png",
//           title: "Prisma",
//           url: "https://prisma.io",
//         },
//         {
//           category: "Open Source",
//           description: "GraphQL implementation",
//           id: "2ea8cfb0-44a3-4c07-bdc2-31ffa135ea78",
//           imageUrl: "https://www.apollographql.com/apollo-home.jpg",
//           title: "Apollo GraphQL",
//           url: "https://apollographql.com",
//         },
//       ];
//     },
//   },
// };

export const resolvers = {
  Query: {
    getUser(parent: any, args: any, context: any, info: any) {
      console.log(args.id);
      return 1;
    },
    getBook(parent: any, args: any, context: any, info: any) {
      return args.id;
    },
    getCard(parent: any, args: any, context: any, info: any) {
      // apolloのvariablesに入っている値をconsole.logで確認
      console.log(args.id);
      return 3;
    },
    listBooks(parent: any, args: any, context: any, info: any) {
      return 4;
    },
    listCards(parent: any, args: any, context: any, info: any) {
      return 5;
    },
    test(parent: any, args: any, context: any, info: any) {
      return "test";
    },
  },
};
