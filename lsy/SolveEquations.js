var a,b,c,x1,x2,judge;
if(a===0)x1=x2=-c/b;
else
{
    judge=b*b-4*a*c;
    if(judge<0)console.log("No solution!");
    else if(judge===0)x1=x2=-b/2*a;
    else
    {
        x1=(-b+Math.sqrt(judge))/2*a;
        x2=(-b-Math.sqrt(judge))/2*a;
    }
}

