'use strict';

var enumOwnProps = require('@fav/prop.enum-own-props');

function defaults(dest /* , ...src */) {
  if (dest == null) {
    dest = {};
  } else {
    dest = new Object(dest);
  }

  for (var i = 1, n = arguments.length; i < n; i++) {
    defaultsEach(dest, arguments[i]);
  }
  return dest;
}

function defaultsEach(dest, src) {
  var props = enumOwnProps(src);
  for (var i = 0, n = props.length; i < n; i++) {
    var prop = props[i];

    if (dest[prop] != null) {
      continue;
    }

    if (src[prop] == null) {
      continue;
    }

    try {
      dest[prop] = src[prop];
    } catch (e) {
      // If a property is read only, TypeError is thrown,
      // but this function ignores it.
    }
  }
}

module.exports = defaults;
