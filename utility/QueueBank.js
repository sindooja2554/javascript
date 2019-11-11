class Node
{
    constructor(cash)
    {
        this.cash=cash;
        this.next = null;
    }
}

class Queue
{
    constructor(){
        this.front = null;
        this.back = null;
        this.size=0
    }

    //tocheck if there is no node
    isEmpty()
    {
        if(this.front===null)
            return true;
        else
            return false;
    }

    //to enqueue
    enqueue(cash)
    {
        let node = new Node(cash);
        if(this.isEmpty())
        {
            this.front=node;
            this.back=node;
        }
        else
        {
            this.back.next = node;
            this.back=node;
        }
        this.size++;
        console.log("Successfully Deposit.");
        this.display();
    }

    //Dequeue
    dequeue()
    {
        let node = this.front;
        if(this.isEmpty())
            console.log("EMPTY QUEUE");
        else
        {
            this.front=this.front.next;
        }
        if(this.front===null)
            this.back=null;
        this.size--;
        console.log("Successful Withdraw.");
        this.display();
    }
    
    //size
    size()
    {
        console.log(this.size);
        return this.size;
    }

    //To Print
    display()
    {
        if(this.isEmpty())
        {
            console.log("EMPTY QUEUE");
        }
        else
        {
            let tempArray = [];
            let temp =this.front;
            while(temp)
            {
                tempArray.push(temp.cash);
                temp = temp.next;
            }
            console.log(tempArray.join(','));

        }
    }
}

module.exports={
    Queue
}
