/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    if (!input.match(/^\d/)) {
      input = '1' + input;
    };
    if (!input.match(/[A-z]/)) {
      result = input;
    } else result = input.split(/[A-z]+$/)[0];
    if (!result.match(/[^0-9\.\/]/) && !result.match(/\.\d*\./) && !result.match(/\/.*\//)) {
      result = eval(result);
    } else result = undefined;
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    if (!input.match(/[A-z]/)) {
      return result;
    };
    result = input.match(/[A-z]+$/)[0];
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch (initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result =  'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
    };
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result =  'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
    };
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    };
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;