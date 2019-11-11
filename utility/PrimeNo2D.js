class Prime2D
{
    //creating twoD array
    twoDArray()
    {
        try
        {
            var prime = this.primeNumber(1000);
            //console.log(prime.length);
            if(prime.length===0)   throw 'Array is empty'

            var arrPrime = [["000-100 "],["100-200 "],["200-300 "],["300-400 "],["400-500 "],["500-600 "],["600-700 "],["700-800 "],["800-900 "],["900-1000 "]];
            var range = 100, i = 0, j = 1;
            for(let p = 0;p < prime.length-1; p++)
            {
                if (prime[p] < range)
                {
                    arrPrime[i][j] = prime[p];
                    j++;
                }
                else
                {
                    j = 1;
                    i=i+1;
                    range = range + 100;
                    arrPrime[i][j] = prime[p];
                }
            }
            return arrPrime;
        }
        catch(e)
        {
            return e
        }

    }
    

    primeNumber(n)
    {
        try
        {
            if(isNaN(n))  throw 'Please enter valid input'
            var array = new Array();
            var position=0;
            var isPrime;
            for(var i=2;i<n;i++)
            {
                isPrime = true;
                for(let j=2;j<i/2;j++)
                {
                    if((i%j)===0)
                    {
                        isPrime=false;
                        break;
                    }
                }
                if(isPrime===true)
                {
                    //console.log(pos);
                    array[position]=i;
                    position++;
                }
            }
            return array;    //return array
        }
        catch(e)
        {
            return e;
        }
    }

    //anagram
    isAnagram(string1,string2)
    {
        try
        {
            var string1 = string1.toString().split();
            
            console.log(this.sort(string1));
            var string2 = string2.toString().split();
            //if(string1==undefined || string2==undefined)    throw 'Cant be undefined'
            var check = false;
            if(string1.length!=string2.length)
            {
                //break;
                return false;
            }
            else
            {
                for(var i=0;i<string1.length;i++)
                {
                    //console.log("i="+i);

                }
                if(check==true)
                {
                    return true
                }
                else
                    return false
            }
        }
        catch(e)
        {
            return e
        }


    }

    //sort
    sort(string)
    {
        var string = string.toString();
        var temp;
        for(var i=0;i<string.length;i++)
        {
            for(var j=1;j<string.length;j++)
            {
                if(string[i]>string[j])
                {
                    temp = string[i];
                    string[i]=string[j];
                    string[j]=temp;
                }
            }
        }
        //console.log(string);
        return string
    }

    //to print prime anagram
    primeAnagram()
    {
        var primeAnagram=new Array();
        primeAnagram = this.primeNumber(1000);
        console.log(primeAnagram.length);
        try
        {
            if(primeAnagram==undefined)   throw 'cannot be undefined'
            //var array =[['000-100'],['100-200'],['200-300'],['300-400'],['400-500'],['500-600'],['600-700'],['700-800'],['800-900'],['900-1000']];
            var arrayAnagram=[];
            var range=100;
            var p=0;
            for(var i=0;i<range;i++)
            {
               for(var j=i+1;j<range;j++)
               {
                   //var string1 = primeAnagram[i];
                   //var string2 = primeAnagram[j];
                   console.log(this.isAnagram(primeAnagram[i].toString(),primeAnagram[j].toString()));
                   if(this.isAnagram(primeAnagram[i],primeAnagram[j])==true)
                   {
                       if(primeAnagram[i]<range && primeAnagram[j]<range)
                       {
                            arrayAnagram.push(primeAnagram[i]);
                            arrayAnagram.push(primeAnagram[j]);
                        }
                        //range = range + 100;
                        else
                        {
                            p++;
                            range = range + 100;
                            arrayAnagram[p] = [];
                            if (primeAnagram[j] <= range)
                            {
                                arrayAnagram[p].push(primeAnagram[i]);
                                arrayAnagram[p].push(primeAnagram[j]);
                            }
                        }
                    }
                }
            }
            return arrayAnagram;
        }
        catch(e)
        {
            return e
        }
    }
/*primeAnagram(){
    var arrayPrime = this.primeNumber(1000);
var arrAP = [[]];
var range = 100, p = 0;
//	prints prime numbers that are anagrams
for (let i = 0; i < arrayPrime.length; i++) {
    for (let j = i + 1; j < arrayPrime.length; j++) {

        if (this.isAnagram(arrayPrime[i].toString(), arrayPrime[j].toString())) {
            if (arrayPrime[i] <= range) {
                if (arrayPrime[j] <= range) {
                    arrAP[p].push(arrayPrime[i]);
                    arrAP[p].push(arrayPrime[j]);
                }
            }
            else {
                p++;
                range = range + 100;
                arrAP[p] = [];
                if (arrayPrime[j] <= range) {
                    arrAP[p].push(arrayPrime[i]);
                    arrAP[p].push(arrayPrime[j]);
                }
            }
        }
    }
}
console.log("Anagram prime numbers are: ");
for (let i = 0; i < 10; i++) {

    console.log(arrAP[i]);
}


}*/
}

module.exports={
    Prime2D
}