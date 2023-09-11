function mergeSort(arr: number[]):number[] {
    if(arr.length < 2) {
        return arr;
    }
    let mid: number = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: number[], rightArr: number[]) {
    let sortedArr: number[] = [];

    while (leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr.shift();
        }
        else {
            sortedArr.push(rightArr[0]);
            rightArr[0];
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort([1,-1,3, -1]));

console.log(mergeSort([0,0,0,1,1,1,0]));