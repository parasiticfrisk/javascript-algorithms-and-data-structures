// Author: August Frisk
// Course: Free Code Camp - Algorithms & Data Structures - Fall 2018
// Project: Roman Numeral Converter

function convertToNumerals(num) {
  // Catch decimals
  num = Math.floor(num);
  
  var numeralVals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  var numerals = Object.keys(numeralVals); // Keys in an array for easy iteration
  var result = ""; // Final roman numerals

  // For subtractive rules
  var powersOfTen = [];
  for (var exponent = 0; exponent < 6; exponent++) {
    var pow = Math.pow(10, exponent);
    powersOfTen.push(pow);
  }

  var remainder = num;

  while (remainder > 0) {
    for (var i = 0; i < numerals.length; i++) {
      var currentNumeralVal = numeralVals[numerals[i]];
      var mod = remainder % currentNumeralVal;
      var modBack = currentNumeralVal % remainder;
      var divide = remainder / currentNumeralVal;

      if (remainder - currentNumeralVal >= 0) {
        remainder -= currentNumeralVal;
        result += numerals[i];
        break;
      }

      // Subtractive rules
      // Looping from lowest to highest value to get correct subtrahend
      for (var j = (numerals.length - 1); j > i; j--) {
        var minuend = currentNumeralVal;
        var subtrahend = numeralVals[numerals[j]];

        // Only to a numeral (the subtrahend) that is a power of ten (I, X or C).
        // For example, "VL" is not a valid representation of 45 (XLV is correct).
        if (powersOfTen.indexOf(subtrahend) === -1) {
          continue;
        }
        // Only when the subtrahend precedes a minuend no more than ten times larger. 
				// For example, "IL" is not a valid representation of 49 (XLIX is correct).
				if (subtrahend * 10 < minuend) {
          continue;
        }

        var minused = minuend - subtrahend;

        if (remainder - minused >= 0) {
          remainder -= minused;
          result += numerals[j] + numerals[i];
          break;
        }
      }

      // Stop loop early if we have no remainder
      if (remainder === 0) {
        break;
      }
    }
  }

  return result;
}

var date = new Date();
var year = date.getFullYear();

var id_currentYear = document.getElementById('current-year');

id_currentYear.textContent = year + " - " + convertToNumerals(year);

var id_convert = document.getElementById('convert');
var id_converted = document.getElementById('converted');

id_convert.onkeyup = (function(e) {
  e.preventDefault();
  id_converted.textContent = convertToNumerals(id_convert.value);
});