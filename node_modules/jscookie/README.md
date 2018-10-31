# jscookie

A tiny js cookie utility to get, set, and expire cookies.


## How to use
### Install
* NPM: `npm install jscookie`

### Import the module
```javascript
var jscookie = require('jscookie');
```

### Set a cookie
```javascript
// Simple Session Cookie
jscookie.set({
	name   : 'the_cookie_name',
	value  : 'cookie value'
});
```

or

```javascript
// Advanced Options
jscookie.set({
	name   : 'the_cookie_name',
	value  : 'cookie value',
	exdays : 5; 
	path   : '/',
	domain : 'http://thisdomain.com'
});
```
Setting a cookie exdays to `false`, or ommitting the property, will create a session only cookie..

### Get a cookie value
```javascript
jscookie.get('the_cookie_name');
```

### Expire a cookie value
```javascript
jscookie.del('the_cookie_name');
```
