
## Take a string and turn it into a bookmarklet.
def booker(inp):
    import urllib
    return 'javascript:' + ''.join([urllib.quote(ln.strip()) for ln in inp.split('\n')])
