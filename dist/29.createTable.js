"use strict";
function createTable(table) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${table} * ${index} = ` + table * index);
    }
}
createTable(2);
