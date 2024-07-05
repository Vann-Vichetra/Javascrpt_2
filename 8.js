const num = [1,3,5,2,4,6,9,5,1,2,5]
function sortlist(arr){
    let a = arr.length
    let isbig;

    for(let i = 0 ; i < a - 1 ; i++){
        isbig = false;
        for(let j = 1 ; j < a - 1; j++){
            if(arr[j + 1] < arr[j]){
               let list  = arr[j]
               arr[j] = arr[j+ 1];
               arr[j + 1] = list

               isbig = true;
            }
        }
        if (!isbig){
            break;
        }
    }
    return arr;
}
console.log(sortlist(num));