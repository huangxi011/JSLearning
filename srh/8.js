//该程序用来搞各种定积分
var a=10,b=1,step=0.0001;

console.log(func(a,b,step,f3));
//
function f1(x)
{
    return x+1;
}
function f2(x)
{
    return x-1;
}
function f3(x)
{
    return x*x;
}
function func(a,b,step,f)
{
    let sum=0;
    for(let x=b;x<=a;x+=step)
    {
        sum+=step*f(x);
    }
    return sum
}