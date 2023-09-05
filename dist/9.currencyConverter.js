"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const endpoint = "https://openexchangerates.org/api/latest.json";
const API_KEY = "3e95a3b1d0b942709735e1e1092f4a62";
const base = "USD";
const symbol = "INR";
async function fetchResponse(amount, from, to) {
    var _a;
    let response = await axios_1.default.get(endpoint, {
        params: {
            app_id: API_KEY,
            base: from,
            symbols: to, // Indian Rupee (INR) as the target currency
        },
    });
    console.log(amount * ((_a = response.data) === null || _a === void 0 ? void 0 : _a.rates[to]));
}
fetchResponse(500, base, symbol);
