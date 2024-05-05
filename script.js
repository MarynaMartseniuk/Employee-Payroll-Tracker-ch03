// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let newEmpLArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let a = "y"; // 'a' indicates 'y' for 'yes - I whant to add new Employee'
 
  // while user did not change 'y' ('yes') , keep getting input 
  // for a next new Employee 
  while (a === "y") {

  //while.step.1  get from a user info: an input (using prompt method) for 
  // First Name, Last Name and Salary. Stor the input in consts 
  // 'firstName', 'lastName', 'salary'.
    const firstName = window.prompt("Add Employee's First Name");
  //console.log(firstName);
    const lastName = window.prompt("Add Employee's Last Name");
    const salary = window.prompt("Add Employee's Salary, $");

  // while.step.2  put the info that just has been gotten into 
  // a sonst 'newEmpl' type of object
    const newEmpl = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

  // while.step.3 add new element ('newEmpl' type of object) to the end 
  // off the array ('newEmpLArray'). So we adding a new element to our array.
  // Resault: we got info for a new line in a table that contains 
  // Fist Name, Last Name and Salary of a new Employee. 
    newEmpLArray.push(newEmpl);
  //console.log(newEmpLArray);

  // while.step.4 ask a user if a there ia a next new Employee who should be added
  // if user input is 'y' (variable 'a' got a new value of 'y') then 
  // steps##1-4 will be repeated again;
  // if user input is not 'y' (variable 'a' got a new value than is not 'y') then
  // 'while (a === "y") {}' is done and next step of code will be executed  (which
  // is 'return newEmpLArray;' of 'collectEmployees = function()' ).
    a = window.prompt("Wuold you like to add one more employeer? (y/n)");
  }

  // return to the 'const collectEmployees' the value of 
  // array 'newEmpLArray' which is the final updated list of Employees as for now.
  // return;
  return newEmpLArray;
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
