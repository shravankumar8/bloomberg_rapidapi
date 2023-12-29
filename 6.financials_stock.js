// this is the response received while fetching the financials of apple stocks 
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://bloomberg-market-and-financial-news.p.rapidapi.com/stock/get-financials",
  params: { id: "aapl:us" },
  headers: {
    "X-RapidAPI-Key": "c4da87788cmsh56ed38777c9d63ap16e4dajsn4b66eb13ef5f",
    "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
let response = {
  result: [
    {
      name: "Income Statement",
      securityID: "AAPL:US",
      timeBasedSheets: [
        {
          name: "Quarterly",
          columnHeadings: ["12/2022", "4/2023", "7/2023", "9/2023"],
          chartData: [
            {
              name: "Revenue",
              chartType: "bar",
              isPercentage: false,
              values: [117154000000, 94836000000, 81797000000, 89498000000],
            },
            {
              name: "Net Income",
              chartType: "bar",
              isPercentage: false,
              values: [29998000000, 24160000000, 19881000000, 22956000000],
            },
            {
              name: "Profit Margin",
              chartType: "line",
              isPercentage: true,
              values: [25.6056, 25.4756, 24.3053, 25.6497],
            },
          ],
        },
        {
          name: "Annual",
          columnHeadings: ["2020", "2021", "2022", "2023"],
          chartData: [
            {
              name: "Revenue",
              chartType: "bar",
              isPercentage: false,
              values: [274515000000, 365817000000, 394328000000, 383285000000],
            },
            {
              name: "Net Income",
              chartType: "bar",
              isPercentage: false,
              values: [57411000000, 94680000000, 99803000000, 96995000000],
            },
            {
              name: "Profit Margin",
              chartType: "line",
              isPercentage: true,
              values: [20.9136, 25.8818, 25.3096, 25.3062],
            },
          ],
        },
      ],
    },
    {
      name: "Balance Sheet",
      securityID: "AAPL:US",
      timeBasedSheets: [
        {
          name: "Quarterly",
          columnHeadings: ["12/2022", "4/2023", "7/2023", "9/2023"],
          chartData: [
            {
              name: "Total Assets",
              chartType: "bar",
              isPercentage: false,
              values: [346747000000, 332160000000, 335038000000, 352583000000],
            },
            {
              name: "Total Liabilities",
              chartType: "bar",
              isPercentage: false,
              values: [290020000000, 270002000000, 274764000000, 290437000000],
            },
            {
              name: "Debt to Assets",
              chartType: "line",
              isPercentage: true,
              values: [32.0435, 33.0007, 32.6172, 35.1492],
            },
          ],
        },
        {
          name: "Annual",
          columnHeadings: ["2020", "2021", "2022", "2023"],
          chartData: [
            {
              name: "Total Assets",
              chartType: "bar",
              isPercentage: false,
              values: [323888000000, 351002000000, 352755000000, 352583000000],
            },
            {
              name: "Total Liabilities",
              chartType: "bar",
              isPercentage: false,
              values: [258549000000, 287912000000, 302083000000, 290437000000],
            },
            {
              name: "Debt to Assets",
              chartType: "line",
              isPercentage: true,
              values: [37.7532, 38.8949, 37.5558, 35.1492],
            },
          ],
        },
      ],
    },
    {
      name: "Cash Flow",
      securityID: "AAPL:US",
      timeBasedSheets: [
        {
          name: "Quarterly",
          columnHeadings: ["12/2022", "4/2023", "7/2023", "9/2023"],
          chartData: [
            {
              name: "Operating",
              chartType: "line",
              isPercentage: false,
              values: [34005000000, 28560000000, 26380000000, 21598000000],
            },
            {
              name: "Investing",
              chartType: "line",
              isPercentage: false,
              values: [-1445000000, 2319000000, 437000000, 2394000000],
            },
            {
              name: "Financing",
              chartType: "line",
              isPercentage: false,
              values: [-35563000000, -25724000000, -24048000000, -23153000000],
            },
          ],
        },
        {
          name: "Annual",
          columnHeadings: ["2020", "2021", "2022", "2023"],
          chartData: [
            {
              name: "Operating",
              chartType: "line",
              isPercentage: false,
              values: [80674000000, 104038000000, 122151000000, 110543000000],
            },
            {
              name: "Investing",
              chartType: "line",
              isPercentage: false,
              values: [-4289000000, -14545000000, -22354000000, 3705000000],
            },
            {
              name: "Financing",
              chartType: "line",
              isPercentage: false,
              values: [
                -86820000000, -93353000000, -110749000000, -108488000000,
              ],
            },
          ],
        },
      ],
    },
  ],
};