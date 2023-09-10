let arr5 = [1,3,5,7];
let missingElement:number[] = [];

for (let index = Math.min(...arr5); index <= Math.max(...arr5); index++) {
    if(!arr5.includes(index)) {
        missingElement.push(index);
    }
    
}
console.log(missingElement);