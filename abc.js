var rdl = require('readline-sync');
var a = rdl.questionInt('Enter=');
//console.log(typeof(a));
if(a==="")
{
    console.log('Please enter valid input');
    //var a = rdl.question('Enter=');
    console.log()
}

else
    console.log(a);
/*
var util = require('./utility/BalancedEx');
var u = new util.Stack();
u.isBalancedParentheses();*/
var u = require('./utility/utility');
console.log("Enter a=");
var a = u.inputIntegerRead();
console.log(a);
u.SReplace(jhdfgj);