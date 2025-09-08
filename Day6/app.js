let arr = [5,2,7,3,4];
let res1 = arr.map((ele)=>ele*2);
console.log(res1);//[10, 4, 14, 6, 8]

function Employee(name,dept,age,salary){
    this.name = name;
    this.dept = dept;
    this.age = age;
    this.salary = salary;
};

let employees = [
    new Employee("John","IT",28,50000),
    new Employee("Jane","HR",32,60000),
    new Employee("Doe","Finance",45,80000),
    new Employee("Smith","IT",29,55000)
]

let names= employees.map((ele)=>ele.name);
console.log(names);//['John', 'Jane', 'Doe', 'Smith']

let res2 = arr.filter((ele)=>ele%2==0);
console.log(res2);//[2, 4]

let employeesTakingSalaryMoreThan55000 = employees.filter((ele)=>ele.salary>55000);
console.log(employeesTakingSalaryMoreThan55000);

let employeesAgeLessThanEqualTo30 = employees.filter((ele)=>ele.age<=30);
console.log(employeesAgeLessThanEqualTo30);

let res4 = arr.forEach((ele)=>console.log(ele*3));
console.log(res4);

let totalSalary = arr.some((ele)=>ele>6);
console.log(totalSalary);

let isAllEven = arr.every((ele)=>ele%2==0); 
console.log(isAllEven);

let totalSalaryOfEmployees = employees.findIndex((ele)=>ele.salary>60000);
console.log(totalSalaryOfEmployees);

let arr2 = [5,3,7,6,2];
arr2.sort();
console.log(arr2);//[2, 3, 5, 6, 7]


let arr3 = [5,3,7,6,2];
arr3.sort((a,b)=>b-a);
console.log(arr3);//[7, 6, 5, 3, 2]

console.log(employees.sort((a,b)=>a.salary-b.salary));

console.log(employees.sort((a,b)=>b.age-a.age));

console.log(employees.sort((a,b)=>{
    if(a.name<b.name) {
        return 1;
    }
   else{
        return -1;
    } 
}));