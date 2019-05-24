import { 
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType 
 } from 'graphql'

 import MovieType from './MovieType'

 export default new GraphQLObjectType({
    name: 'Search',
    description: 'Search Movie',
    fields: () => ({
        page: {
            type: GraphQLFloat,
            resolve: search => search.page,
        },
        total_results: {
            type: GraphQLFloat,
            resolve: search => search.total_results,
        },
        total_pages: {
            type: GraphQLFloat,
            resolve: search => search.total_pages,
        },
        results: {
            type: new GraphQLList(MovieType),
            resolve: search => search.results,
        },
    })
})