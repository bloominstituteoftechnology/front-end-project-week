/**
 * @author DaveDevor davedevor@gmail.com
 */

/**
 * Cookie Object with set, get, and del methods.
 * @type  {Object}
 */
var cookie = {

	/**
	 * Set a cookie
	 * @param  {Object}  options
	 * @param  {String}  options.name    * name or key of the cookie
	 * @param  {String}  options.value   value of the cookie
	 * @param  {Number}  options.exdays  how many days until the cookie expires
	 * @param  {String}  options.path    path of cookie
	 * @param  {String}  options.domain  domain of cookie
	 */
	set: function(options) {
		options.name   = options.name   || false;
		options.value  = options.value  || '';
		options.exdays = options.exdays || false;
		options.path   = options.path   || '/';
		options.domain = options.domain || false;

		if (options.name) {
			var domain  = options.domain ? 'domain=' + options.domain + ';' : '';
			var path    = 'path=' + options.path;
			var expires = '';

			// create the expiration date
			if (options.exdays) {
				var d = new Date();

				d.setTime( d.getTime() + (options.exdays * 24 * 60 * 60 * 1000));
				expires = "expires=" + d.toUTCString();
			}

			document.cookie = options.name + "=" + options.value + ";" + domain + path + ';' + expires;

			return true;
		}

		return false;
	},

	/**
	 * Get a Cookies Value
	 * @param   {String}  cname  name of cookie to retrieve
	 *
	 * @return  {String}         Returns the Value of the Cookie
	 */
	get: function(cname) {
		var name        = cname + "=";
		var arrCookie   = document.cookie.split(';');
		var strCookie     = null;
		var string        = null;

		// Go through every cookie in the array
		for(var i = 0; i < arrCookie.length; i++) {
			strCookie = arrCookie[i];

			// trim spaces
			while (strCookie.charAt(0) === ' ') {
				strCookie = strCookie.substring(1);
			}

			// if this cookie matches the name we are trying to retreive - found it.
			if (strCookie.indexOf(name) === 0) {
				// get the value
				string = strCookie.substring(name.length, strCookie.length);

				// If this is a string of an object, convert it to an object
				if (string.split('&').length > 1) {
					return _stringToObject(string);

				}

				// return the value
				return string;
			}
		}

		// never found cookie
		return false;
	},

	/**
	 * Delete a cookie by key
	 * @param   {String}  name   string of cookie name
	 *
	 * @return  {Boolean}        success
	 */
	del: function (name) {
		name = name || false;
		var isDeleted = cookie.set({
			name   : name,
			value  : null,
			exdays : -1,
			path   : null,
			domain : null
		});

		return isDeleted;
	}
};


function _stringToObject(string) {
	var strArray   = string.split('&');
	var stringObj  = {};
	var propValArray = null;

	for (var i = 0; i < strArray.length; i++) {
		propValArray = strArray[i].split('=');

		if (propValArray.length > 1) {
			stringObj[propValArray[0]] = propValArray[1];
		}
	}

	return stringObj;
}


module.exports = cookie;
