function findIntersection(arry1: number[], arry2: number[]) {
    let intersection = arry1.filter((ele) => arry2.includes(ele));
    let removeDuplicates = intersection.filter((ele, index, arry) => arry.indexOf(ele) == index );
    return removeDuplicates;
}

console.log(findIntersection([2,5,3,7,2], [5,2,9,0,1]));