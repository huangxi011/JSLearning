 var count = 0,result = 2,k;
 while(String.valueOf(result).length()<=k+1) 
 {
        result = 0.5*(result+2/result);
        count++;
}
result = Double.parseDouble(String.valueOf(result).substring(0, k+2));


