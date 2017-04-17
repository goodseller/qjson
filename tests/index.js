"use strict"

var obj = {
    firstName: "John",
    lastName: "Dow",
    today: new Date(),
    re: /(\w+)\s(\w+)/
  },
  QJSON = (typeof exports === 'undefined') ? window.QJSON : require('../'),
  strfn,
  objfn

function testBasic(objfn) {
  if (objfn.firstName === "John") {
    console.log('     basic.................   OK\n')
  } else {
    console.log('     basic.................   failure\n')
  }
}

function testRegexp(objfn) {
  var str = 'John Smith'
  if (str.replace(objfn.re, "$2, $1") === 'Smith, John') {
    console.log('     RegExp................   OK\n')
  } else {
    console.log('     RegExp................   failure\n')
  }
}

function testDate(objfn) {
  if (objfn.today.getTime && typeof objfn.today.getTime === 'function') {
    console.log('     Date..................   OK\n')
  } else {
    console.log('     Date..................   failure\n')
  }
}


console.log('\n\n======= Test started =======\n\n')

console.log('  Stringifying original object.......\n')
strfn = QJSON.stringify(obj)
console.log(strfn)

console.log('\n  Parsing this string....... ')
objfn = QJSON.parse(strfn)
console.log(objfn)
console.log('\n  Running tests: \n')

testBasic(objfn)
testRegexp(objfn)
testDate(objfn)

console.log('\n\n======= Test finished =======\n\n')



