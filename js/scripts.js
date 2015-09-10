var baseConverter = function(base, number) {
  if (number < base) {
    return number;
  }
  log = Math.log(number) / Math.log(base);
  logFloor = Math.floor(log);
  return Math.pow(10, logFloor) + baseConverter(base, number - Math.pow(base, logFloor));
}

module.exports = baseConverter;
