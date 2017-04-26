## Pretty Time Ago Russian 

Simple & lightweight JavaScript function for formatting 
a date to pretty (human-readable) time ago period in russian locale.

## Example usage

Native JavaScript function (2.2Kb):
```js
prettyTimeAgoRu('2017-04-26 00:00 17:20');  // 4 часа назад
```

jQuery plugin:
```html
<script src="pretty-time-ago-ru.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="pretty-time-ago-ru.jquery.js"></script>

<time class="jsPrettyTimeAgoRu">2017-04-25</time>
```
Output:
```html
<time class="jsPrettyTimeAgoRu">вчера</time>
```

## Minify & Build

Minify sources:

```shell
sudo npm install uglify-js -g
./build.sh
```
