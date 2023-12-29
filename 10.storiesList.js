/*const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list',
  params: {
    template: 'CURRENCY',
    id: 'usdjpy'
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
let res = {
  stories: [
    {
      resourceType: "Story",
      card: "article",
      title: "Nasdaq 100 Caps Pivotal Fed Week at Record High: Markets Wrap",
      published: 1702676679,
      internalID: "S5OIS0DWRGG000",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iEGVxBnD3_Lo/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/stock-market-today-dow-s-p-live-updates",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/stock-market-today-dow-s-p-live-updates",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Stock Bull Run Is Flashing Signs of Exhaustion: Markets Wrap",
      published: 1702589118,
      internalID: "S5MLNOT0AFB400",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijx4MkEtmv84/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-13/stock-market-today-dow-s-p-live-updates",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-13/stock-market-today-dow-s-p-live-updates",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Fidelity, JPMorgan Buck Market by Betting on Stronger Dollar",
      published: 1702635677,
      internalID: "S4R7OMT0AFB400",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWH_ZhhPSs1U/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/usd-will-surprise-again-with-strength-as-global-economic-slowdown-looms",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/usd-will-surprise-again-with-strength-as-global-economic-slowdown-looms",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "S&P 500 Tops 4,700 as Dovish Fed Signs Sink Yields: Markets Wrap",
      published: 1702505714,
      internalID: "S5KP8VT0AFB400",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iiu7HJDoewPc/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-12/stock-market-today-dow-s-p-live-updates",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-12/stock-market-today-dow-s-p-live-updates",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Option Traders Take Risky Bets on Unusually Calm Indian Rupee",
      published: 1702640071,
      internalID: "S5AJQUDWX2PT00",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iB69W1SRC5rI/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-15/options-traders-risk-the-steamroller-in-bets-on-rbi-s-rupee-grip",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-15/options-traders-risk-the-steamroller-in-bets-on-rbi-s-rupee-grip",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Dollar Extends Drop as Fed Seen Leading Global Monetary Pivot",
      published: 1702576802,
      internalID: "S5NW11T0G1KW00",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isLduGJ2OemE/v1/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/dollar-extends-drop-as-fed-leads-global-pivot-to-monetary-easing",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/dollar-extends-drop-as-fed-leads-global-pivot-to-monetary-easing",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Yen Jumps More Than 1% on Bets of More Aggressive Fed Cuts",
      published: 1702534562,
      internalID: "S5MOPJT1UM0W00",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i12HJV.S0Ivg/v0/600x-1.png",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/yen-gains-more-than-1-on-bets-of-more-aggressive-fed-cuts",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/yen-gains-more-than-1-on-bets-of-more-aggressive-fed-cuts",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Dollar Drops Most in a Month as Fed Weighs 2024 Rate Cuts",
      published: 1702503585,
      internalID: "S5M4OPT0AFB400",
      label: "Currencies",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.ymfzEhWBHg/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-13/dollar-drops-1-against-select-g-10-peers-as-fed-mulls-2024-cuts",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-13/dollar-drops-1-against-select-g-10-peers-as-fed-mulls-2024-cuts",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Dollar Drops to Weakest Since August as Traders Eye Fed Pivot",
      published: 1702563958,
      internalID: "S5MJYQT1UM0W00",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iA3Py51OF0PQ/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/dollar-drops-to-weakest-since-august-as-fed-weighs-rate-cuts",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-14/dollar-drops-to-weakest-since-august-as-fed-weighs-rate-cuts",
    },
    {
      resourceType: "Story",
      card: "article",
      title: "Traders Betting Fed Peak Is Here Curb Pivot Wagers: Markets Wrap",
      published: 1702417715,
      internalID: "S5ITZBT0G1KW00",
      thumbnailImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iSbgGNkn7hnw/v0/600x-1.jpg",
      primarySite: "markets",
      shortURL:
        "https://www.bloomberg.com/news/articles/2023-12-11/stock-market-today-dow-s-p-live-updates",
      longURL:
        "https://www.bloomberg.com/news/articles/2023-12-11/stock-market-today-dow-s-p-live-updates",
    },
  ],
  title: "Currencies",
};