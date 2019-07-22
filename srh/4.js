//该程序用于求水仙花数
var numbers=[1,0,0,0,0];
for(;numbers[0]<=9;numbers[0]++)
{
    for(numbers[1]=0;numbers[1]<=9;numbers[1]++)
    {
        for(numbers[2]=0;numbers[2]<=9;numbers[2]++)
        {
            for(numbers[3]=0;numbers[3]<=9;numbers[3]++)
            {
                for(numbers[4]=0;numbers[4]<=9;numbers[4]++)
                {
                    if(GetNarNumber(numbers)==GetNumber(numbers))
                    {
                        console.log(GetNumber(numbers));
                    }
                }
            }
        }
    }
}
function GetNarNumber(numbers)
{
    let sum=0;
    for(num of numbers)
    {
        if(num===0)continue;
        sum+=Math.pow(num,5);
    }
    return sum;
}
function GetNumber(numbers)
{
    let numString="";
    for(ch of numbers)
    {
        numString+=ch;
    }
    return parseInt(numString);
}