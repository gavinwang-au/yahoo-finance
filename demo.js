var YahooFinanceAPI = require('./build/yahoo.finance.js');

var api = new YahooFinanceAPI();

api
  .getHeadlines('AAPL,YHOO,MSFT')
  .then(function(res) {
    console.log("HEADLINES ?", res[0].item);
  })

api
  .getQuote('AAPL')
  .then(function(res) {
    console.log("QUOTE ?", res.query.results.quote);
  });