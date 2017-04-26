#!/bin/bash

uglifyjs --compress --mangle -o pretty-time-ago-ru.min.js -- pretty-time-ago-ru.js

cat pretty-time-ago-ru.js pretty-time-ago-ru.jquery.js > pretty-time-ago-ru.jquery.build.js
uglifyjs --compress --mangle -o pretty-time-ago-ru.jquery.build.js -- pretty-time-ago-ru.jquery.build.js
