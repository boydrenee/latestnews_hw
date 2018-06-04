var request = require("request");
var cheerio = require("cheerio");


var scrape = function(cb) {
    request("http://www.nytimes.com", function(err, res, body){

        var $ = cheerio.load(body);
        var articles = [];

        $("h2.story-heading").each(function(i, element) {

            var headline = $(element).children().text().trim();
            var link = $(element).children().attr("href");
            var summary = $(element).children().text().trim();

            articles.push({
                headline: headline,
                link: link,
                summary: summary
            });
        });
        cb(articles);
    });
}

module.exports = scrape;