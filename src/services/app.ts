import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
import type { BitcoinData } from "../bitcoinTypes";

const BASE_URL = "https://blockchain.info";

export const bitcoinApi = createApi({
    reducerPath: "bitcoinApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    endpoints: builder => ({
        getBitcoinData: builder.query<BitcoinData, undefined>({
            query: () => "/ticker"
        })
    })
});

export const { useGetBitcoinDataQuery } = bitcoinApi;

