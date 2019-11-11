var utility = require('./LinkedList');
//var list = new utility.LinkedList();

module.exports={
hashFunction(hashArray,result)
{
    try
    {
        if(result===undefined)    throw 'File cant be empty'
        for(var i=0;i<result.length;i++)
        {
            var newString=result[i];
            var index = newString%11;
            if(hashArray[index]==undefined)
            {
                hashArray[index]=new utility.LinkedList();
                hashArray[index].add(newString);
            }
            else
            {
                hashArray[index].add(newString);
            }
        
        }
    
        for (let j = 0; j <= 10; j++)
        {
            console.log("\nNumber at " + j + " ");
            if (hashArray[j] != undefined) 
            {
                hashArray[j].print();
            }
        }
    }
    catch(e)
    {
        return e;
    }


}

}