import axios from "axios";

const endpoint = "https://openexchangerates.org/api/latest.json";
const API_KEY="3e95a3b1d0b942709735e1e1092f4a62";
const base = "USD";
const symbol= "INR";

async function fetchResponse(amount: number,from: string, to: string) {
    let response = await axios.get(endpoint, {
        params: {
            app_id: API_KEY,
            base: from, // Dollar as the base currency
            symbols: to, // Indian Rupee (INR) as the target currency
        },
    });

    console.log(amount * response.data?.rates[to]);
}


fetchResponse(500, base, symbol);
