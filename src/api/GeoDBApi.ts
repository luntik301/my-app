// geoDBApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const geoDBApi = createApi({
    reducerPath: 'geoDBApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://wft-geo-db.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8ed9fddeaamshc8695e15ee0024dp1e6d80jsnd1dd6a27565f');
            headers.set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCityInfo: builder.query({
            query: (cityId) => `geo/cities/${cityId}`,
        }),
    }),
});

export const { useGetCityInfoQuery } = geoDBApi;