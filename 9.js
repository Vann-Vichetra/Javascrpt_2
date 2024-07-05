[3,5,3,4,2,5,7,1,9];
function Median(arr){
    
arr.sort((a,b) => a - b);
    
    const middle = Math.floor(arr.length / 2);
    if(arr.length % 2 === 0){
        return (arr[middle - 1] + arr[middle]) / 2;
    }else{
        return arr[middle];
    }
} 
console.log(Median([3,5,3,4,2,5,7,1,9]));
