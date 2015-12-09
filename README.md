# ideal-succotash
A microsuite of code that I use to capture URLs from a browser and save them to a server. Helps me manage webpage overload.

# Components

It has a few parts that go in different places and are used in different ways.

## stasher.js

A self-contained piece of Javascript that extracts some metadata from the current page and POSTs it to capt. Intended to be used as a bookmarklet. 

## capt.pycg

A Python CGI script that captures POSTed JSON structs and appends them to a file. Provides no connective tissue between the structs so the file itself will not be JSON but its individual lines will.

## booker.py

A handy tool that converts JS code into a bookmarklet. This can be piped in via stdin. Note that booker is not very smart (yet) so be careful. Particularly make sure all comments are a single line starting with // (these will be ignored) and that every single statement is explicitly terminated with a semicolon.

# Rationale

The idea is to make it easy to capture data about a webpage in a way that makes that data immediately available and possible to work with later.

# Info

In its default configuration, Stasher captures the URL of the page, as well as document.title and the URLs of any images over 0.01 megapixel that were found in the document.

It also has a facility for user-defined metadata; if you wish to add metadata then use the JS console to create an object called _meta in the context of the window. This will be sent verbatim as "meta".

# Plans

I will be building a frontend (using Angular most likely) for making use of the data I'm capturing, like a web-based bookmarks manager. Most likely the captured data will be pushed into Elasticsearch and made queryable from there.
