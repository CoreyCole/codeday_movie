# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field


class Movie(Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    name = Field()
    year = Field()
    imageLink = Field()
    score = Field()
    description = Field()
    rating = Field()
    genres = Field()
    length = Field()
    cast = Field()


