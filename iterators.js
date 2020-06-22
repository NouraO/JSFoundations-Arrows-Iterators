/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
  array.forEach((num) => console.log(num));
};
//logger([3, 5, 7, 9, 11]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
  return temperatures.map((tempinc) => (tempinc - 32) * (5 / 9));
};
//console.log(toCelsius([3, 5, 7, 9, 11]));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  const days = temperatures.filter((temp) => threshhold < temp);

  return days;
};
//console.log(hottestDays([3, 5, 7, 9, 11], 8));
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  const HotDays = hottestDays(temperatures, threshhold);
  const ToC = toCelsius(HotDays);
  logger(ToC);
};
//console.log(logHottestDays([3, 5, 7, 9, 11], 9));

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
