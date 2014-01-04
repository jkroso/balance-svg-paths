
module.exports = balance

/**
 * define `a` and `b` using the same number of
 * path segments while preserving their shape
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 */

function balance(a, b){
  var diff = a.length - b.length
  var short = diff >= 0 ? b : a
  diff = Math.abs(diff)
  while (diff--) short.push(['c',0,0,0,0,0,0])
  return [a, b]
}
