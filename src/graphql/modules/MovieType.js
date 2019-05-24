import { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean
 } from 'graphql'
import { globalIdField } from 'graphql-relay'

export default new GraphQLObjectType({
    name: 'Movie',
    description: 'Movie data',
    fields: () => ({
        vote_count: {
            type: GraphQLFloat,
            resolve: movie => movie.vote_count,
        },
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: movie => movie.id,
        },
        video: {
            type: GraphQLBoolean,
            resolve: movie => movie.video,
        },
        vote_average: {
            type: GraphQLFloat,
            resolve: movie => movie.vote_average,
        },
        title: {
            type: GraphQLString,
            resolve: movie => movie.title,
        },
        popularity: {
            type: GraphQLFloat,
            resolve: movie => movie.popularity,
        },
        poster_path: {
            type: GraphQLString,
            resolve: movie => movie.poster_path,
        },
        original_language: {
            type: GraphQLString,
            resolve: movie => movie.original_language,
        },
        original_title: {
            type: GraphQLString,
            resolve: movie => movie.original_title,
        },
        genre_ids: {
            type: new GraphQLList(GraphQLFloat),
            resolve: movie => movie.genre_ids,
        },
        backdrop_path: {
            type: GraphQLString,
            resolve: movie => movie.backdrop_path,
        },
        adult: {
            type: GraphQLBoolean,
            resolve: movie => movie.adult,
        },
        overview: {
            type: GraphQLString,
            resolve: movie => movie.overview,
        },
        release_date: {
            type: GraphQLString,
            resolve: movie => movie.release_date,
        },
    })
})