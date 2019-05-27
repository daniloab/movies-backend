import dotenv from 'dotenv'
dotenv.config()

import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import fetch from 'node-fetch'

import MovieType from '../modules/movie/MovieType'
import GenreType from '../modules/movie/GenreType'
import SearchType from '../modules/movie/SearchType'

const { api_url, api_key } = process.env

export default new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all queries',
    fields: () => ({
        moviesUpcoming: {
            type: new GraphQLList(MovieType),
            args: {
                page: { type: GraphQLFloat }
            },
            resolve: async (root, args) => {
                try {
                    const { page } = args || {};
                    const urlMoviesUpcoming = `${api_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}` ;

                    let response = await fetch(urlMoviesUpcoming);
                    let data = await response.json();

                    return data.results;
                } catch (error) {
                    console.log(error);
                }
            }
        },
        movie: {
            type: MovieType,
            args: {
                movie_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: async (root, args) => {
                try {
                    const { movie_id } = args || {};
                    const url = `${api_url}/movie/${movie_id}?api_key=${api_key}&language=en-US`;

                    let response = await fetch(url);
                    let data = await response.json();

                    return data;
                } catch (error) {
                    console.log('error', error)
                }
            }
        },
        genres: {
            type: new GraphQLList(GenreType),
            resolve: async (root, args) => {
                try {
                    const url = `${api_url}/genre/movie/list?api_key=${api_key}&language=en-US`;

                    let response = await fetch(url);
                    let data = await response.json();

                    return data.genres;
                } catch (error) {
                    console.log('error', error)
                }
            }
        },
        moviesSearch: {
            type: SearchType,
            args: {
                query: { type: new GraphQLNonNull(GraphQLString) },
                page: { type: new GraphQLNonNull(GraphQLFloat) }
            },
            resolve: async (root, args) => {
                try {
                    const {query, page} = args;
                    const url = `${api_url}/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=en-US`;

                    let response = await fetch(url);
                    let data = await response.json();

                    return data;
                } catch (error) {
                    console.log('error', error)
                }
            }
        }
    })
})