let employees = [];
let idCounter = 1;

function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();
    const messageElement = document.getElementById("message");

    // Validate input fields
    if (name === "" || profession === "" || age === "") {
        messageElement.textContent = "All fields are required.";
        messageElement.className = "message error";
        return;
    }

    // Add new employee to the list
    const newEmployee = {
        id: idCounter++,
        name,
        profession,
        age: Number(age),
    };
    employees.push(newEmployee);
    displayEmployees();

    // Show success message
    messageElement.textContent = "Employee added successfully!";
    messageElement.className = "message success";

    // Reset the form
    document.getElementById("employeeForm").reset();
}

function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    const employeeCount = document.getElementById("employeeCount");

    // Clear current list
    employeeList.innerHTML = "";

    // Display each employee in the list
    employees.forEach(employee => {
        const employeeItem = document.createElement("div");
        employeeItem.className = "employee-item";
        employeeItem.innerHTML = `
            <span>${employee.name} - ${employee.profession} - Age: ${employee.age}</span>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeItem);
    });

    // Update employee count
    employeeCount.textContent = employees.length;
}

function deleteEmployee(id) {
    // Filter out the deleted employee
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
