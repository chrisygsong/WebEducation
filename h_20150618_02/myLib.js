/**
 * Created by chris on 2015. 6. 17..
 */
var calcurator = (function(calcurator, $, undefined) {

  //결과값을 반환.
  calcurator.calculate = function(num1, num2, previouskey) {
    var result = num1.toString() + " " + previouskey.toString() + " " + num2.toString();
    return resultString = result.toString() + ' = ' + eval(result).toString();
  }

  return calcurator;
})(window.calcurator || {}, jQuery);