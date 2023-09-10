function armstrongNumber(num: number) {
    let len = String(num).length;
    let result = 0
    let b = num;
    while(b>0) { 
        let c = b%10;
        result = result + c**len;
        b = parseInt(String(b/10));
    }
    console.log(num);
    console.log(result);
    if(result == num) {
        console.log("Number is armstrong");
    }  
    else {
        console.log("number is not armstrong");
    }
}

armstrongNumber(987);
armstrongNumber(153);