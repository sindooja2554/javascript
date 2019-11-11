

isBalancedParentheses(expression)
{
    var check;
    //var stack = new Array();
    //console.log(expression.length);
    if(expression.length===0)   throw "Length should be greater than zero";
    for(let i=0;i<expression.length;i++)
    {
        if(expression[i]=='(' || expression[i]=='{' || expression[i]=='[')
        {
            //console.log("E="+expression[i]);
            this.pushElement(expression[i]);
            //console.log("s="+stack);
            //break;
            //this.display();
        }

        else if(expression[i]==')' || expression[i]=='}' || expression[i]==']')
        {
            check = this.popElement();
            console.log(check);
            //Switch loop to check paranthesis pair
            switch (check)
            {
                case ')':
                    if (check === '(')
                        return true;
                case '}':
                    if (check === '{')
                        return true;
                case ']':
                    if (check === '[')
                        //console.log("HHH");
                        return true;
            }
        }

    }
}