/**
* QJSON - javascript (both node.js and browser) plugin to stringify,
*          parse objects with Regexp and Date.
*
* Version - 0.0.0
* Copyright (c) goodseller
* https://github.com/goodseller/qjson/
*
* Licensed under the MIT license ( http://www.opensource.org/licenses/mit-license.php )
*/

(function (exports) {
"use strict"

  var __RegExp__ = "__RegExp__"
  var _configs = {
    RegExp: true,
    Date: true
  }
  exports.setConfigs = function (new_configs) {
    _configs = new_configs
  }
  
  exports.stringify = function (obj, configs) {
    if(!configs) configs = _configs
    return JSON.stringify(obj, function (key, value) {
      if (configs.RegExp && value instanceof RegExp) {
        return {__RegExp__: value.toString()}
      }
      return value
    })
  }

  exports.parse = function (str, configs) {
    if(!configs) configs = _configs

    return JSON.parse(str, function (key, value) {
      if (configs.RegExp && value && value.__RegExp__) {
        // Parse value
        var input = value.__RegExp__
        var m = input.match(/(\/?)(.+)\1([a-z]*)/i)

        // Invalid flags
        if (m[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(m[3])) {
            return new RegExp(input)
        }

        // Create the regular expression
        return new RegExp(m[2], m[3])
      }
      
      if (typeof value != 'string') {
        return value
      }

      if (configs.Date && value.match(
        /*iso8061*/
        /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/)) {
        return new Date(value)
      }
      return value
    })
  }
  
  exports.default = exports

}(typeof exports === 'undefined' ? (window.QJSON = {}) : exports))


