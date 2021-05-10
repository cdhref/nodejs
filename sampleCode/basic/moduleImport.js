const {odd, even} = require('../module/var');
const val = require('../module/var');
const checkNum = require('../module/func');

/*
//require 대신 다음 형태로도 사용 가능
import {odd, even} from './module/var';
import val from './module/var';
import checkNum from './module/func';
*/

function importedValPrint(){
    //normal
    console.log(`val.odd = ${val.odd}`);
    console.log(`val.even = ${val.even}`);
    //destructuring assignment
    console.log(`destructuring assignment / odd = ${odd}`);
    console.log(`destructuring assignment / even = ${even}`);
}

importedValPrint();
checkNum(1);
checkNum(2);