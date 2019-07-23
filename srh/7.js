//该程序用来求5阶幻方
var arrayDim2=new Array();
var arrayDim1=new Array();
//初始化二维数组
for(let k=0;k<=4;k++)
{   
    arrayDim2[k]=new Array();
    for(let j=0;j<=4;j++)
    {
        arrayDim2[k][j]=-1; //-1就是没有
    }
}
//初始化一维数组
for(let i=0;i<=24;i++)
{
    arrayDim1[i]=-1;
}
//对二维数组操作
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
    
    if(arrayDim2[row][col]!==-1)
    {
        row+=2;
        col-=1;
        arrayDim2[row][col]=num;
    }
    else
    {
        arrayDim2[row][col]=num;
    }
    ++col;
    --row;
}
//对一维数组操作
row=0,col=2;
for(let num=1;num<=25;num++)
{
    if(col>=5&row<0)
    {
        row+=2;
        col-=1;
    }
    if(col>=5)col%=5;
    else if(row<0)row=4;
    
    if(arrayDim1[row*5+col]!==-1)
    {
        row+=2;
        col-=1;
        arrayDim1[row*5+col]=num;
    }
    else
    {
        arrayDim1[row*5+col]=num;
    }
    ++col;
    --row;
}
PrintArray(arrayDim2);
console.log("------------------");
for(let i=0;i<=24;i++)
{
    console.log(arrayDim1[i]);
}
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