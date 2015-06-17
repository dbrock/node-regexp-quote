module.exports = function (x) {
  return x.toString().replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
}
