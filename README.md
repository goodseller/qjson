# QJSON

QJSON stand for query JSON, an extended JSON to handle js query (eg. mongodb) between server and client in the form of JSON.

Javascript (both node.js and browser) plugin to stringify / parse jsvascript objects with

  - **RegExp**
  - **Date**

**Version** - 0.0.0

**Copyright** (c) goodseller https://github.com/goodseller/qjson/
**Home page:** [https://github.com/goodseller/qjson](https://github.com/goodseller/qjson)

**License:** MIT

**Example Usage:**
  
Node.Js:
  
*<= ES5*
  
    var QJSON = require('qjson')
    
    var str = QJSON.stringify(obj[, configs])
    var obj = QJSON.parse(str[, configs])

*>= ES6*

    import QJSON from 'qjson'
    
    let str = QJSON.stringify(obj[, configs])
    let obj = QJSON.parse(str[, configs])
  
Browser:
  
    QJSON.stringify(obj[, configs])
    QJSON.parse(str[, configs])

Example configs:

    var configs = {
      RegExp: false, // Disable RegExp handling
      Date: false    // Disable Date handling
    }
    
    QJSON.setConfigs(configs) // changing default configs
    
    QJSON.stringify(obj)

or

    QJSON.stringify(obj, configs) // apply config for one time use

**Inspirations**
 - [json-fn](https://github.com/vkiryukhin/jsonfn)
 - [regex-parser.js](https://github.com/IonicaBizau/regex-parser.js)
