//该程序用于计算一元二次方程
var a=3,b=9,c=2;
var delta=b*b-4*a*c;
if(delta<0)
{
    console.log("方程无实根");
}
else if(delta===0)
{
    console.log((-b)/(2*a));
}
else if(delta>0)
{
    console.log((-b+Math.sqrt(delta))/(2*a));
    console.log((-b-Math.sqrt(delta))/(2*a));
}