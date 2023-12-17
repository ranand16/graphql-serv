export const typeDefs = `#graphql
    type Game {
        id: ID! # not allowed to be null
        title: String! # not allowed to be null
        platform: [String!]! # not allowed to be null as well as string inside the array can also not be null
        reviews: [Review!]! # game has reviews
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query { # every graphql schema requires, job to DEFINE ENTRY POINTS to the graph. Query can be taken as gatekeeper of our graph
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
`;
// int -whole numbers, float, string, boolean, ID
