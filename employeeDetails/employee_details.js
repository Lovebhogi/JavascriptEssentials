const employees = [
    {id:1,name:'john Doe',age:30,department:'IT',salary:50000,specilization:'Python'},
    {id:2,name:'Alice Smith',age:28,department:'HR',salary:45000,specilization:'Java'},
    {id:3,name:'Bob Johnson',age:35,department:'Finance',salary:60000,specilization:'C++'},
];

//function to display all the employees
function displayEmployees(){
    const totalEmployees=employees.map(employee=>`<p>${employee.id} : ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specilization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML=totalEmployees;
}
function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc,employee)=>acc+employee.salary,0);
    alert(`Total Salaries : $${totalSalaries}`)
}

function displayHREmployee() {
    const hrEmployees = employees.filter(employee=>employee.department==='HR');
    const hrEmployeeDisplay =hrEmployees.map((employee,index)=>`<p> ${employee.id} : ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML=hrEmployeeDisplay;
}

function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee=> employee.id===employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML=`<p> ${foundEmployee.id} : ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML=`<p> No Employee Found</p>`;
    }
}
function findEmployeeBySpecilization(employeeSpecilized){
    const foundEmployee =employees.find(employee=>employee.specilization===employeeSpecilized);
    if (foundEmployee) {
         document.getElementById('employeesDetails').innerHTML=`<p> ${foundEmployee.id} : ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specilization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML=`<p> No Specilization Found</p>`;
    }
}