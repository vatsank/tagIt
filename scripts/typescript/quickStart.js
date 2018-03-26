"use strict";
function showBonus(emp) {
    return emp.salary * 2;
}
var find = (emp) => emp.salary * 2;
const ram = { empName: 'ram', empNo: 101, salary: 4500 };
const shyam = { empNo: 102, empName: 'shyam', salary: 5500 };
console.log(showBonus(ram));
console.log(find(shyam));
//# sourceMappingURL=quickStart.js.map