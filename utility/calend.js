var w = require('util');
class calend
{
    isLeapYear(year)
    {
        try
        {
            var year=Number(year);
            if(isNan(year)) throw 'Year should be a number'

            if(year%4==0 && year%100!==0)
                return true
            else
                return false
        }
        catch(e)
        {
            return e;
        }
    }

    dayOfWeek(month,day,year)
    {
        try
        {
            if(isNaN(month) && isNaN(day) && isNaN(year))    throw 'Should be number'
            //console.log(year-(14-month)/12);
            var y = Math.floor((year-(14-month))/12);
            var x = Math.floor(y + y/4 - y/100 + y/400);
            var m = month + 12 * Math.floor((14 - month) / 12)- 2;
            var d = Math.floor((day + x + (31*m)/12)) % 7;
            return d;
        }
        catch(e)
        {
            return e;
        }

    }

    //display calender
    displayCalender(month,year)
    {
        try
        {
            if(isNaN(month) && isNaN(year))    throw 'Should be number'
            var weekDays = ['S','M','T','W','Th','F','S'];
            //months[0]=' ' ... so that january starts from 1
            var months=[' ','January','February','March','April','May','June','July','August','September','October','November','December'];
            var daysInMonth = [' ','31','28','31','30','31','30','31','30','31','30','30','31'];
            if(month==2 && this.isLeapYear(year))
                daysInMonth[month]=29;
    
            // starting day
            var d = this.dayOfWeek(month, 1, year);
            //console.log(d);
    
            console.log(" "+months[month]," "+year);
            console.log(weekDays.join(" "));
    
            // print the calendar
            for (let i = 0; i < d; i++)
            console.log(" ");
            for (var i = 1; i <= daysInMonth[month]; i++)
            {
                console.log(i);
                //date mod 7 is 0 then it shifts to next line
                if (((i + d) % 7 == 0) || (i == daysInMonth[month]))
                console.log();
            } 
        }
        catch(e)
        {
            return e
        } 
    }
}

module.exports={
    calend
}