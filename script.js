// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let newEmpLArray = [];
// console.log(newEmpLArray);

// Collect employee data
const collectEmployees = function() {
   // TODO: Get user input to create and return an array of employee objects
  let addNewEmpl = true; // 'addNewEmpl = true' for user wants to add anew employee.
 
   // while user did not change 'addNewEmpl = true' , keep getting input 
   // for a next new Employee:
  while (addNewEmpl === true) {

     //while.step.1  get from a user info: an input (using prompt method) for 
     // First Name, Last Name and Salary. Stor the input in consts 
     // 'firstName', 'lastName', 'salary':
    const firstName = window.prompt("Add Employee's First Name");
    const lastName = window.prompt("Add Employee's Last Name");
    const salary = window.prompt("Add Employee's Salary, $");
     
     // while.step.2 convert "salary" string type value into number type value.
    const convrtSalary = Number(salary);
     // console.log(typeof convrtSalary);
     // console.log(convrtSalary);

     // while.step.3 if value of a salary from the user input is 
     // eqeul to the convert value (example: "1" equel 1), 
    if (convrtSalary == salary) {
     // then return to a sonst 'newEmpl' (type of object) values of the user's input:
      const newEmpl = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
      };
       // console.log(newEmpl);
          // while.step.3.1 add new element ('newEmpl' type of object) to the end 
          // off the array ('newEmpLArray'). So we adding a new element to our array.
          // Resault: we got info for a new line in a table that contains 
          // Fist Name, Last Name and Salary of a new Employee. 
       newEmpLArray.push(newEmpl);
    // else return to a sonst 'newEmpl' (type of object) salary = 0, because user's input was not a nuber):  
    } else {
      const newEmpl = {
        firstName: firstName,
        lastName: lastName,
        salary: "0"
      };
       // console.log(newEmpl);
          // while.step.3.2 add new element ('newEmpl' type of object) to the end 
          // off the array ('newEmpLArray'). So we adding a new element to our array.
          // Resault: we got info for a new line in a table that contains 
          // Fist Name, Last Name and Salary of a new Employee. 
      newEmpLArray.push(newEmpl);
    };

     // This is the while-loop code end. User may choose 'addNewEmpl = true/faulse by  
     // clicking on the buttons "ok" or "cancel"
     addNewEmpl = window.confirm("Wuold you like to add one more employeer?");
  //   console.log(addNewEmpl);
  };

  // return to the 'const collectEmployees' the value of 
  // array 'newEmpLArray' which is the final updated list of Employees as for now.
    return newEmpLArray;
};



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
