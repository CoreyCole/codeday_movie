import urllib.request
import urllib.parse
import time

#--------------*

def sample_function():
    """ This function pulls www.google.com and returns a list of all of the images on that page."""

    # load the page to a list
    page=read_page('http://www.google.com')

    # create an empty list
    image_urls=[]

    # loop through lines in the page
    for line in page:

        # start at the beginning of the line
        index=0

        # this will loop through the line from position 'index' to the end, finding images
        # images usually being found in html as src="http://image.url.com/img.jpg"
        while 'src="' in line[index:]:

            # get the start of the image url
            image_start=line.find('src="',index)+len('src="')

            # get the end of the image url
            image_end=line.find('"',image_start)

            # append 'http://www.google.com' to image string, it's not included in the raw HTML
            new_url='http://www.google.com'+line[image_start:image_end]
            
            # append the url to the list
            image_urls.append(new_url)

            # move the index up
            index=image_end+1

    # print image list
    for url in image_urls:
        print(url)


#--------------*

def read_page(url,maxtry=5):
    """ This function takes a url as string and returns the lines on the page as a list."""

    # create a list to be filled with HTML lines
    lines = []

    # conditional statement to check for shit in URL fed to function
    if ('http' in url) and (not '<' in url):

        # call open_page() to get HTML
        opened=open_page(url,maxtry,0)

        # don't recall why this is separately necessary. but it works!
        # appends each HTML line to the 'lines' list
        for line in opened:
            lines.append(str(line))

    # alert user if URL input is shit        
    else:
        print('Malformed url input: '+url)

    # return filled list
    return lines

def open_page(url,maxtry,timer=0):
    """Function called by read_page to handle URL request."""

    # first, try requesting the page. automatically return if successful.
    try:
        
        return urllib.request.urlopen(urllib.request.Request(url))

    # problem?
    except:

        # if first time, pause for ten seconds, then try again
        if timer==0:
            time.sleep(10)
            return open_page(url,maxtry,(timer+1))

        # if other failed attempts, print an error message and pause for 1 minute
        elif timer<maxtry:
            if timer==1:
                print('')
            print('HTML or URL error on '+url+' ('+str(timer)+')')           
            time.sleep(60)
            return open_page(url,maxtry,(timer+1))

        # if too many failed attempts, give up and alert user.
        else:
            print('Gave up on opening '+url+' .')
            time.sleep(60)
            return []