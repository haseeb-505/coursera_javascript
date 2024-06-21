const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaSScript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
    //... More employee records can be added here
  ];

// function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById("employeesDetails").innerHTML = totalEmployees;

// calculate the salries of all the employees

function calculateTotalSalaries() {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.id, 0);
    alert(`Total Salary of all the employees is: $${totalSalary}`);
}

// display HREmployees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === "HR");
    // console.log(hrEmployees);
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}- ${employee.department}- ${employee.salary}</p>`).join('');
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

// findEmployeeById
// first store the user input and then call the findEmployeeById function

function getUserById() {
    const userid = parseInt(document.getElementById("userIdInput").value);
    findEmployee(userid);
}

// to get the user using name input;

function getUserByName() {
    const userName = (document.getElementById("getuserName").value).toLowerCase();
    findEmployee(userName);
}

// function to search for employee on the basis of name and id
function findEmployee(userInput) {
    if (isInteger(userInput)) {
        const foundEmployee = employees.find(employee => employee.id === userInput);
        if (foundEmployee) {
            document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
        } else {
            document.getElementById("employeesDetails").innerHTML = `no employee has been found with this ID: ${document.getElementById("userIdInput").value}`;
        }
    } else if (typeof userInput === 'string') {
        const foundEmployee = employees.find(employee => (employee.name).toLowerCase() === userInput);
        if (foundEmployee) {
            document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
        } else {
            document.getElementById("employeesDetails").innerHTML = `no employee has been found with this ID: ${document.getElementById("userIdInput").value}`;
        }
    } else {
        document.getElementById("employeesDetails").innerText = "User input is neither an integer nor a string!";
    }  
}

// isInteger check
function isInteger(value) {
    const number = Number(value);
    return Number.isInteger(number);
}




