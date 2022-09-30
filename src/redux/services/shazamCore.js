import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getRelatedSongs: builder.query({
      query: (songid) => `/tracks/related?track_id=${songid}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/search/multi?query=${searchTerm}&search_type=SONGS_ARTISTS`,
    }),
    getSongDetails: builder.query({
      query: (songid) => `/tracks/details?track_id=${songid}`,
    }),
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const {
  useGetArtistDetailsQuery,
  useGetRelatedSongsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
  useGetSongDetailsQuery,
  useGetTopChartsQuery,
} = shazamCoreApi;
