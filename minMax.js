function maxMin(arry){
    let max;
    let min;
    for(let i=0;i<arry.length;i++){
        if(arry[i]>max){
            max=arry[i];
        }
   
        if(arry[i]<min){
            min=arry[i];
        }
    }
    return [max,min];
            
}