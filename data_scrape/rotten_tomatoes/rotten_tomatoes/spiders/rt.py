from scrapy.spider import Spider
from scrapy.selector import Selector

from rotten_tomatoes.items import Movie

import scrapy


class RTSpider(Spider):
    name = "rt"
    allowed_domains = ["rottentomatoes.com"]
    start_urls = [
        "http://www.rottentomatoes.com/top",
    ]

    def parse(self, response):
        sel = Selector(response)
        urls = sel.xpath('//ul[@class="genrelist"]/li/a/@href').extract()
        # items = []

        for link in urls:
            url = "http://rottentomatoes.com" + link
            yield scrapy.Request(url, callback=self.parse_dir_contents)

    def parse_dir_contents(self, response):
        for link in response.xpath('//a[@class="unstyled articleLink"]/@href').extract():
            url = "http://rottentomatoes.com" + link
            yield scrapy.Request(url, callback=self.parse_movie_contents)

    def parse_movie_contents(self, response):
        sel = response.xpath('//div[@id="mainColumn"]')

        item = Movie()
        item["name"] = sel.xpath("//h1[@class='movie_title']/span/text()").extract()[0]
        item["year"] = sel.xpath("//h1[@class='movie_title']/span/span/text()").extract()[0]
        item["imageLink"] = (sel.xpath("//img[@class=' posterImage']/@src").extract() + sel.xpath("//img[@class='posterImage']/@src").extract())[0]
        item["score"] = sel.xpath("//span[@itemprop='ratingValue']/text()").extract()[0]
        item["description"] = sel.xpath("//p[@id='movieSynopsis']/text()").extract()[0] + " ... Read more on rottentomatoes.com"
        item["rating"] = sel.xpath("//td[@itemprop='contentRating']/text()").extract()[0]
        item["genres"] = sel.xpath("//span[@itemprop='genre']/text()").extract()
        item["length"] = sel.xpath("//time[@itemprop='duration']/text()").extract()[0]
        item["cast"] = sel.xpath("//a[@class='unstyled articleLink']/span[@itemprop='name']/text()").extract()
        yield item
