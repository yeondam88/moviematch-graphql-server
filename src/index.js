import { ApolloServer, gql } from "apollo-server";
import resolvers from "./graphql/resolvers";

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    popularity: Float!
    poster_path: String!
    original_language: String!
    backdrop_path: String!
    adult: Boolean!
    overview: String!
    release_date: String!
  }

  type Genre {
    id: Int!
    name: String!
  }

  type ProductionCompany {
    id: Int!
    logo_path: String!
    name: String!
    origin_country: String!
  }

  type MovieDetail {
    id: Int!
    imdb_id: String!
    original_language: String!
    overview: String!
    popularity: String!
    poster_path: String!
    homepage: String!
    genres: [Genre!]!
    budget: Int!
    production_companies: [ProductionCompany!]!
    release_date: String!
    revenue: Int!
    runtime: Int!
    status: String!
    tagline: String!
    vote_average: Float!
    vote_count: Int!
  }

  type RecommendationMovies {
    id: Int!
    title: String!
    popularity: Float!
    poster_path: String!
    original_language: String!
    backdrop_path: String!
    adult: Boolean!
    overview: String!
    release_date: String!
  }

  type Backdrop {
    file_path: String!
    height: Int!
    width: Int!
  }

  type Poster {
    file_path: String!
    height: Int!
    width: Int!
  }

  type MovieImage {
    id: Int!
    backdrops: [Backdrop!]!
    posters: [Poster!]!
  }

  type Query {
    trendMovies(time_window: String!, media_type: String!): [Movie!]!
    nowPlayingMovies: [Movie!]!
    upcomingMovies: [Movie!]!
    movieRecommendations(id: Int!): [RecommendationMovies!]!
    popularMovies: [Movie!]!
    topRatedMovies: [Movie!]!
    movieImages(id: Int!): MovieImage!
    movieDetail(id: Int!): MovieDetail!
    search(query: String!): [Movie!]!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
