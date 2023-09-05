function sortArray(arr: number[]) {
    let start = 0;
    let end = arr.length - 1;

    while (start<end) {
        if(arr[start] == 0) {
            start= start+1;
        }
        else {
            arr[start] = arr[end];
            arr[end] =  1;
            end = end - 1 
        }
    }
    return arr;
}

console.log(sortArray([0,1,0,1]));

const arr = [0, 1, 0, 1];

const sortedArr = arr.filter(value => value === 0).concat(arr.filter(value => value === 1));

console.log(sortedArr);