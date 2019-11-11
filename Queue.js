var utility = require('./utility/QueueBank');
var util = require('./utility/utility');
var queue = new utility.Queue();
//var readline = require('readline-sync');
// queue.enqueue(5000);
// queue.enqueue(2500);
// queue.enqueue(1250);
// queue.dequeue();
do
{
    var choice;
    console.log("1.Deposit");
    console.log("2.Withdraw");
    console.log("3.Exit");
    console.log('Enter your choice=');
    choice = util.inputIntegerRead();
    switch(choice)
    {
        case 1:
              //console.log("case1");
              console.log("Enter Ammount to Deposit=");
              queue.enqueue(util.inputIntegerRead());
              break;
        case 2:
              console.log("Enter Ammount to Withdraw=");
              queue.dequeue(util.inputIntegerRead());
              if(queue.isEmpty())
              {
                  console.log("No Sufficient Balance");
              }
              else
              {
                console.log("Balance is ")
                console.log(queue.display());
              }
              break;
        case 3:
              return;
        default:
              console.log("Wrong Choice");
              break;
    }
    //console.log("switch");
}while(choice);
