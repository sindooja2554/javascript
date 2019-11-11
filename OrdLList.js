var oll=require('./utility/OrderList');
var ll=new oll.OrderedLinkedList();
var fs = require('fs');
var rdl = require('readline-sync');
var result = new Array();
//console.log(typeof(ress));
var result = fs.readFileSync('number.txt').toString();

console.log(""+result);
//var res = string.split(" ");
//var n= ress.length;
//console.log("n"+n);
var result = ll.BubbleSort(result);
console.log(result);
