import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

import db from "./_DB";

// object that has resolver functions for each root query type
const resolvers = {
    Query: {
        // matches the type name
        games() {
            // resolver for games, apollo will return this data depending on a query
            return db.games;
        },
        authors() {
            return db.authors;
        },
        reviews() {
            return db.reviews;
        },
        review(_, args) {
            const { id } = args;
            return db.reviews.find((r) => r.id === id);
        },
        game(_, args) {
            const { id } = args;
            return db.games.find((g) => g.id === id);
        },
        author(_, args) {
            const { id } = args;
            return db.authors.find((a) => a.id === id);
        },
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((r) => r.game_id === parent.id);
        },
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id);
        },
    },
    Review: {
        game(parent) {
            return db.games.filter((g) => g.id === parent.game_id);
        },
        author(parent) {
            return db.authors.filter((a) => a.id === parent.author_id);
        },
    },
};

const server: ApolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    },
});

console.log("seerver ready at", url, " : ", 4000);
