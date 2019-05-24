import { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean
 } from 'graphql'

 import GenreType from './GenreType'

const CollectionType = new GraphQLObjectType({
    name: 'Collection',
    description: 'Movie Collection that belongs',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: movie => movie.id,
        },
        name: {
            type: GraphQLString,
            resolve: movie => movie.name,
        },
        poster_path: {
            type: GraphQLString,
            resolve: movie => movie.poster_path,
        },
        backdrop_path: {
            type: GraphQLString,
            resolve: movie => movie.backdrop_path,
        }
    })
})

const ProductionCompaniesType = new GraphQLObjectType({
    name: 'ProductionCompanies',
    description: 'Movie Production Companies',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: movie => movie.id,
        },
        name: {
            type: GraphQLString,
            resolve: movie => movie.name,
        },
        logo_path: {
            type: GraphQLString,
            resolve: movie => movie.logo_path,
        },
        origin_country: {
            type: GraphQLString,
            resolve: movie => movie.origin_country,
        }
    })
})

const ProductionCountriesType = new GraphQLObjectType({
    name: 'ProductionCountries',
    description: 'Movie Production Countries',
    fields: () => ({
        iso_3166_1: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: movie => movie.iso_3166_1,
        },
        name: {
            type: GraphQLString,
            resolve: movie => movie.name,
        },
    })
})

const SpokenLanguagesType = new GraphQLObjectType({
    name: 'SpokenLanguages',
    description: 'Movie Spoken Languages',
    fields: () => ({
        iso_639_1: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: movie => movie.iso_639_1,
        },
        name: {
            type: GraphQLString,
            resolve: movie => movie.name,
        },
    })
})

export default new GraphQLObjectType({
    name: 'Movie',
    description: 'Movie data',
    fields: () => ({        
        adult: {
            type: GraphQLBoolean,
            resolve: movie => movie.adult,
        },
        backdrop_path: {
            type: GraphQLString,
            resolve: movie => movie.backdrop_path,
        },
        belongs_to_collection: {
            type: CollectionType,
            resolve: movie => movie.belongs_to_collection,
        },      
        budget: {
            type: GraphQLID,
            resolve: movie => movie.budget,
        },
        genre_ids: {
            type: new GraphQLList(GraphQLFloat),
            resolve: movie => movie.genre_ids,
        },
        genres: {
            type: new GraphQLList(GenreType),
            resolve: movie => movie.genres,
        },
        homepage: {
            type: GraphQLString,
            resolve: movie => movie.homepage,
        }, 
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: movie => movie.id,
        },
        imdb_id: {
            type: GraphQLString,
            resolve: movie => movie.imdb_id,
        },
        original_language: {
            type: GraphQLString,
            resolve: movie => movie.original_language,
        },
        original_title: {
            type: GraphQLString,
            resolve: movie => movie.original_title,
        },
        overview: {
            type: GraphQLString,
            resolve: movie => movie.overview,
        },
        popularity: {
            type: GraphQLFloat,
            resolve: movie => movie.popularity,
        },
        poster_path: {
            type: GraphQLString,
            resolve: movie => movie.poster_path,
        },      
        production_companies: {
            type: new GraphQLList(ProductionCompaniesType),
            resolve: movie => movie.production_companies,
        },
        production_countries: {
            type: new GraphQLList(ProductionCountriesType),
            resolve: movie => movie.production_countries,
        },
        release_date: {
            type: GraphQLString,
            resolve: movie => movie.release_date,
        }, 
        revenue: {
            type: GraphQLFloat,
            resolve: movie => movie.revenue,
        },        
        runtime: {
            type: GraphQLID,
            resolve: movie => movie.runtime,
        },
        spoken_languages: {
            type: new GraphQLList(SpokenLanguagesType),
            resolve: movie => movie.spoken_languages,
        },        
        status: {
            type: GraphQLString,
            resolve: movie => movie.status,
        },       
        tagline: {
            type: GraphQLString,
            resolve: movie => movie.tagline,
        },
        title: {
            type: GraphQLString,
            resolve: movie => movie.title,
        },
        video: {
            type: GraphQLBoolean,
            resolve: movie => movie.video,
        },
        vote_average: {
            type: GraphQLFloat,
            resolve: movie => movie.vote_average,
        },
        vote_count: {
            type: GraphQLFloat,
            resolve: movie => movie.vote_count,
        },        
    })
})