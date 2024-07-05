//  3.Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers

const arr = [1,2,3,4,5,6,7,8,9]
const average = arr => {
    const avg = arr.reduce((acc,element) => acc + element);
    return avg / arr.length;

}

console.log(average(arr));





