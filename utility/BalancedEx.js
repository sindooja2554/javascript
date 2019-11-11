class Node
{
    constructor(data)
    {
        this.data;
        this.next = null;
        //this.next=null;
    }
}
class Stack
{
    constructor()
    {
        this.top=null;
    }

    //to check if empty
    isEmpty()
    {
        if(this.top===null)
            return true
        else
            return false
    }

    //to push elements
    pushElement(data)
    {
        var node = new Node(data);
        //var data = data;
        //console.log("D"+data);
        //console.log("Empty"+this.isEmpty());
        if(this.isEmpty())
        {
            this.top=node;
            node.data=data;
            //console.log(data);
        }
        else
        {
            this.top = node; 
            let current=this.top;
            node.next=current.next;
            
            //node = this.top.next;
            node.data=data;
            //console.log(data);
        }

    }

    //to pop elements
    popElement()
    {
        //if(this.isEmpty())  throw 'Stack Underflow'

        if(this.top!==null)
        {
            var topdata = this.top.data;
            //console.log("Inside"+topdata);
            this.top= this.top.next;
            //console.log(this.top);
            return topdata;
        }
        else
            return

    }

    //display
    display()
    {
        if(this.isEmpty())   throw "Stack Underflow"

        while(this.top!=null)
        {
            console.log(this.top.data);
            this.top= this.top.next;
        }
    }

    isBalancedParentheses(exp)
    {
        var len;
        len = exp.length;
        //var stk = new st.Stack(len);
        var expArr = [];
        expArr = exp;
        var st =new Array();
    
        var ch = 0;
    
        //Traverse through expArr	
        for (let i = 0; i < expArr.length; i++) {
    
            if (expArr[i] === '(' || expArr[i] === '{' || expArr[i] === '[') {
                //add in the array if '(' appears in the expression 
                st =this.pushElement(expArr[i]);
                this.display();
            }
            else if (expArr[i] === ')' || expArr[i] === '}' || expArr[i] === ']') {
                //pop from the array if ')' appears in the expression
                ch = this.popElement();
                console.log(ch);
    
                //Switch loop to check paranthesis pair
                switch (ch) {
                    case ')':
                        if (ch === ')')
                        return true;
                    case '}':
                        if (ch === '}')
                        return true;
                    case ']':
                        if (ch === ']')
                        return true;
                }
            }
        }
        //return stk.isEmpty();
    }

}

module.exports={
    Stack
}