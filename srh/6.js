//该程序用来计算根号2
var high=2,low=1;
var temp;
for(let count=10000;count>0;count--)
{
    temp=(high+low)/2;
    if(temp*temp>2)high=temp;
    else if(temp*temp<2)low=temp;
    else if(temp*temp===2)break;
}
console.log(temp);