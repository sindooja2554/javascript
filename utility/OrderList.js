class Node
{
    constructor()
    {
        this.data;
        this.next=null;
    }
}

class OrderedLinkedList
{
    constructor()
    {
        this.head=null;
        //this.size=0;
    }

    BubbleSort(array)
    {
        var n = array.length;
        console.log(n);
        var temp=0;
        for(var i=0; i<n; i++)
        {
            for(var j=0; j<n-1-i; j++)
            {
                if(array[j]>array[j+1])
                {
                    temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array
    }
}

module.exports={
    OrderedLinkedList
}