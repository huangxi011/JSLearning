//该程序用来求5阶幻方
var array = new Array();
for(let k=0;k<=4;k++)
{   
    array[k]=new Array();
    for(let j=0;j<=4;j++)
    {
        array[k][j]=-1; //-1就是没有
    }
}
var row=0,col=2;
for(let num=1;num<=25;num++)
{
    if(col>=5&row<0)
    {
        row+=2;
        col-=1;
    }
    if(col>=5)col%=5;
    else if(row<0)row=4;
    
    if(array[row][col]!==-1)
    {
        row+=2;
        col-=1;
        array[row][col]=num;
    }
    else
    {
        array[row][col]=num;
    }
    ++col;
    --row;
}
PrintArray(array);
function PrintArray(array)
{
    for(var k=0;k<=4;k++)
    {   
        for(var j=0;j<=4;j++)
        {
            console.log(array[k][j]);
        }
    }
}