function CheckForPallindrome(str1: string) {
    if ( str1 == str1.split("").reverse().join("") ) {
        return `String is pallidrome: ${str1}`
    }
    else {
        return `Not a pallindrome: ${str1}`
    }
}

console.log(CheckForPallindrome("Kapil"));
console.log(CheckForPallindrome("kanak"));