var rdl = require('readline-sync');
var a = rdl.question('Enter=');
console.log(typeof(a));
if(a==="")
    console.log('Please enter valid input');
else
    console.log(a);