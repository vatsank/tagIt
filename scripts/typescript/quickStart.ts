
interface Employee{ empNo: number; empName: string; salary: number;}

function showBonus(emp:Employee){

    return emp.salary * 2;
}

var find = (emp:Employee)=>emp.salary * 2;

const ram:Employee ={empName:'ram',empNo:101,salary:4500};

const shyam:Employee ={empNo:102,empName:'shyam',salary:5500};

console.log(showBonus(ram));

console.log(find(shyam));





