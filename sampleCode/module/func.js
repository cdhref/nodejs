const {odd, even} = require('./var');
/*
//es6
import {odd, even} from './var';
*/
function checkOddOrEven(num){
    if(num % 2){
        return odd;
    }
    else{
        return even;
    }
}

module.exports = checkOddOrEven;

/*
//es6
export default checkOddOrEvne;
*/