//该程序用来求任意阶幻方
var n=9; //幻方的阶数
var arrayDim2=new Array();
var arrayDim1=new Array();
//初始化二维数组
for(let k=0;k<n;k++)
{   
    arrayDim2[k]=new Array();
    for(let j=0;j<n;j++)
    {
        arrayDim2[k][j]=-1; //-1就是没有
    }
}
//初始化一维数组
for(let i=0;i<n*n;i++)
{
    arrayDim1[i]=-1;
}
//对二维数组操作
var row=0,col=Math.trunc(n/2);
for(let num=1;num<=n*n;num++)
{
    if(col>=n&row<0)
    {
        row+=2;
        col-=1;
    }
    if(col>=n)col%=n;
    else if(row<0)row=n-1;
    
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
row=0,col=Math.trunc(n/2);
for(let num=1;num<=n*n;num++)
{
    if(col>=n&row<0)
    {
        row+=2;
        col-=1;
    }
    if(col>=n)col%=n;
    else if(row<0)row=n-1;
    
    if(arrayDim1[row*n+col]!==-1)
    {
        row+=2;
        col-=1;
        arrayDim1[row*n+col]=num;
    }
    else
    {
        arrayDim1[row*n+col]=num;
    }
    ++col;
    --row;
}
PrintArray(arrayDim2);
console.log("------------------");
for(let i=0;i<n*n;i++)
{
    console.log(arrayDim1[i]);
}
function PrintArray(array)
{
    for(var k=0;k<n;k++)
    {   
        for(var j=0;j<n;j++)
        {
            console.log(array[k][j]);
        }
    }
}