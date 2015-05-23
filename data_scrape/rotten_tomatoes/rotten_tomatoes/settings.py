# -*- coding: utf-8 -*-

# Scrapy settings for rotten_tomatoes project
#
# For simplicity, this file contains only the most important settings by
# default. All the other settings are documented here:
#
#     http://doc.scrapy.org/en/latest/topics/settings.html
#

BOT_NAME = 'rotten_tomatoes'

SPIDER_MODULES = ['rotten_tomatoes.spiders']
NEWSPIDER_MODULE = 'rotten_tomatoes.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = 'rotten_tomatoes (+http://www.yourdomain.com)'
