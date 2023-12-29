/*const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/get-full',
  params: {
    id: 'adsmi:ind,aex:ind,co1:com,gc1:com'
  },
  headers: {
    'X-RapidAPI-Key': 'c4da87788cmsh56ed38777c9d63ap16e4dajsn4b66eb13ef5f',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */



let infor = {
  result: {
    "ADSMI:IND": {
      securityType: "Index",
      symbol: "ADSMI",
      country: "United Arab Emirates",
      currency: "AED",
      resourceType: "Index",
      resourceSubtype: "Equity",
      region: "EMEA",
      ticker: "adsmi:ind",
      tickerName: "ADSMI:IND",
      template: "Index",
      name: "FTSE ADX GENERAL INDEX",
      watchlist: true,
      resourceId: "ADSMI:IND",
      totalReturn1Y: "-6.22",
      last: "9497.80",
      netChange: "21.81",
      lastPriceTime: 1702616400,
      peRatio: "26.93",
      open: "9475.99",
      close: "9475.99",
      pctChange1M: "-0.81",
      yearHigh: "10364.85",
      dayHigh: "9502.17",
      volume: 354294736,
      yearLow: "9219.64",
      dayLow: "9469.40",
      marketCap: 2640521892518.33,
      pctChangeYTD: "-6.99",
      pctChange: "0.23",
      isOpen: false,
      info: "The ADX General Index is a free float market capitalization weighted index of stocks listed on the Abu Dhabi Securities Exchange. For an equity to be a member of the index it must have five trading days since it was listed. The index was started with a base value of 1000.",
    },
    "AEX:IND": {
      securityType: "Index",
      symbol: "AEX",
      country: "Netherlands",
      currency: "EUR",
      resourceType: "Index",
      resourceSubtype: "Equity",
      region: "EMEA",
      ticker: "aex:ind",
      tickerName: "AEX:IND",
      template: "Index",
      name: "AEX-Index",
      watchlist: true,
      resourceId: "AEX:IND",
      totalReturn1Y: "16.30",
      last: "793.13",
      netChange: "3.22",
      lastPriceTime: 1702616400,
      peRatio: "14.36",
      open: "793.70",
      close: "789.91",
      pctChange1M: "4.55",
      yearHigh: "798.09",
      dayHigh: "796.12",
      volume: 142277680,
      yearLow: "688.24",
      dayLow: "790.96",
      marketCap: 1180686266506,
      pctChangeYTD: "15.11",
      pctChange: "0.41",
      isOpen: false,
      info: "The AEX is a free float market capitalization weighted index that reflects the performance of the 25 largest and most actively traded shares listed on Euronext Amsterdam, and is the most widely used indicator of the Dutch stock market. The index serves as an underlying for structured products, funds, exchange traded funds, options and futures. It is operated by Euronext, the pan-European exchange.",
    },
    "CO1:COM": {
      securityType: "Financial commodity generic.",
      symbol: "CO1",
      currency: "USD",
      resourceType: "Commodity",
      resourceSubtype: "Other",
      region: "EMEA",
      ticker: "co1:com",
      tickerName: "CO1:COM",
      template: "Commodity",
      watchlist: true,
      resourceId: "CO1:COM",
      last: "76.55",
      netChange: "-0.06",
      lastPriceTime: 1702616400,
      unit: "USD/bbl.",
      dayHigh: "77.23",
      dayLow: "75.29",
      pctChange: "-0.08",
    },
    "GC1:COM": {
      securityType: "Financial commodity generic.",
      symbol: "GC1",
      currency: "USD",
      resourceType: "Commodity",
      resourceSubtype: "Other",
      region: "AMERICAS",
      ticker: "gc1:com",
      tickerName: "GC1:COM",
      template: "Commodity",
      watchlist: true,
      resourceId: "GC1:COM",
      last: "2035.70",
      netChange: "-9.20",
      lastPriceTime: 1702616400,
      unit: "USD/t oz.",
      dayHigh: "2059.60",
      dayLow: "2029.20",
      pctChange: "-0.45",
    },
  },
};