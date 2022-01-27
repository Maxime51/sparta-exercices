const products = require("./data/products");
const articles = require("./data/products");

module.exports = function initShop() {
  return {
    articles,
    checkQuantity: function (article, wantedQuantity) {
      return article.quantity >= wantedQuantity;
    },
    getArticles: function () {
      return this.articles;
    },
    buyArticle: function (index) {
      return this.articles[index];
    },
    searchArticles: function (string) {
      // 👉 code here
      let re = new RegExp(string);
      products.forEach(element => {
        if(re.exec(element.label) !== null){
          console.log(element);
        }
      });
    },
  };
};
