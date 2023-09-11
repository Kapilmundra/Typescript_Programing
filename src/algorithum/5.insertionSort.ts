function insertionSort(arry: number[]) {
    let start = 0;
    let end = arry.length - 1;
    let loopStart = start;
    while (loopStart<end) {
        if(arry[loopStart] > arry[loopStart+1]) {
            let temp = arry[loopStart];
            arry[loopStart] = arry[loopStart + 1];
            arry[loopStart+1] = temp;

            for (let index = loopStart; index > start; index--) {
                if(arry[index] < arry[index-1]) {
                    let temp = arry[index];
                    arry[index] = arry[index - 1];
                    arry[index-1] = temp;
                }   
            }
        }
        loopStart++
    }
    return arry;   
}

function insertionSort1(arry: number[]) {
    let start = 0;
    let end = arry.length;
    while (start<end) {
        let numberOfInsert = arry[start];
        let j=start-1;
        while (j>=1 && arry[j] > numberOfInsert) {
            arry[j+1] = arry[j];
            j=j-1;
        }
        arry[j+1] = numberOfInsert
        start++
    }
    return arry;   
}



console.log(insertionSort([1,-1,3, -1]));

console.log(insertionSort([0,0,0,1,1,1,0]));

console.log(insertionSort1([1,-1,3, -1]));

console.log(insertionSort1([0,0,0,1,1,1,0]));