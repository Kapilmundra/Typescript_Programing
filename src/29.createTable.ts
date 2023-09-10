function createTable(table: number) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${table} * ${index} = ` + table*index);    
    } 
}

createTable(2);