#!/usr/bin/env python

def booker(inp):
    import urllib
    return 'javascript:' + ''.join([urllib.quote(ln.strip()) for ln in inp.split('\n') if not ln.startswith('//')])

if __name__ == '__main__':
    import sys
    print booker(sys.stdin.read())
