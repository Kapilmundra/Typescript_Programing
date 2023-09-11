function bubbleSort(arry: number[]) {
    let swapeed:boolean;
    do {
        swapeed = false;
        for (let index = 0; index < arry.length-1; index++) {
            if(arry[index] > arry[index+1]) {
                let temp = arry[index];
                arry[index] = arry[index + 1];
                arry[index+1] = temp;
                swapeed = true;
            }
        }
    }while(swapeed)
    return arry;
}

console.log(bubbleSort([1,-1,3, -1]));

console.log(bubbleSort([0,0,0,1,1,1,0]));