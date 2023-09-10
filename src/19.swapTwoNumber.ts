function swapNumber(a: number, b:number) {
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a);
    console.log(b);    
}

swapNumber(3,5);