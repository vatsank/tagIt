"use strict";
function showBonus(emp) {
    return emp.salary * 2;
}
var find = function (emp) { return emp.salary * 2; };
var ram = { empName: 'ram', empNo: 101, salary: 4500 };
var shyam = { empNo: 102, empName: 'shyam', salary: 5500 };
console.log(showBonus(ram));
console.log(find(shyam));
