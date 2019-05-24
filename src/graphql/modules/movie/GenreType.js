import { 
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType 
 } from 'graphql'

 export default new GraphQLObjectType({
    name: 'Genres',
    description: 'Movie Genres',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: movie => movie.id,
        },
        name: {
            type: GraphQLString,
            resolve: movie => movie.name,
        }
    })
})