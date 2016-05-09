
#### phantomjs
```
which phantomjs
```
returns `/usr/local/bin`

Details

`lrwxrwxrwx  1 root root   59 Apr 26 23:42 phantomjs-bak -> /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs`
<hr>
Rename `phantomjs` to `phantomjs-bak`
```
mv phantomjs phantomjs-bak
```
<hr>
```
which phantomjs
```
Returns `/usr/bin/`
<hr>
`cat /usr/bin/phantomjs` shows it executes `/usr/lib/phantomjs/phantomjs`

Rename `phantomjs` to `phantomjs-bak`
```
mv phantomjs phantomjs-bak
```

####Run
* `node_modules/.bin/phantomjs --webdriver=4444`
* `npm start`
* `node_modules/.bin/codeceptjs run --debug`