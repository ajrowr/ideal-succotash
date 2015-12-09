#!/bin/sh

## Super simple CGI to downloads the content of a URL.
## http://wherever/cgi-bin/download.sh?http://figs.com/fig.gif
FLDR=/var/content/downloads/`date +"%Y%b"`
if ! test -e ${FLDR}; then mkdir -p $FLDR; fi;
cd $FLDR
curl -O ${QUERY_STRING} &
printf "Content-type: text/javascript"
printf "\n\n"
printf "callback({'url':'${QUERY_STRING}', 'status':'DOWNLOADING'});\n"
