function calculateWeeklySalary() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);

    if (isNaN(hourlyRate) || isNaN(hoursWorked) || hourlyRate < 0 || hoursWorked < 0) {
        document.getElementById('weeklyResult').innerText = 'Please enter valid values.';
        return;
    }

    const totalWeeklySalary = hourlyRate * hoursWorked;
    document.getElementById('weeklyResult').innerText = `Total Weekly Salary: $${totalWeeklySalary.toFixed(2)}`;
}


function calculateMonthlySalary() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const employmentType = document.getElementById('employmentType').value;

    if (isNaN(hourlyRate) || hourlyRate < 0) {
        document.getElementById('monthlyResult').innerText = 'Please enter a valid hourly rate.';
        return;
    }

    let hoursWorkedPerWeek;
    if (employmentType === "fullTime") {
        hoursWorkedPerWeek = 40; // Full-time hours
    } else {
        hoursWorkedPerWeek = 20; // Part-time hours
    }

    const totalMonthlySalary = hourlyRate * hoursWorkedPerWeek * 4.33; // Approximate weeks in a month
    document.getElementById('monthlyResult').innerText = `Total Monthly Salary: $${totalMonthlySalary.toFixed(2)}`;
}


function calculateYearlySalary() {
    const weeklySalary = parseFloat(document.getElementById('weeklySalary').value);

    if (isNaN(weeklySalary) || weeklySalary < 0) {
        document.getElementById('yearlyResult').innerText = 'Please enter a valid weekly salary.';
        return;
    }

    const totalYearlySalary = weeklySalary * 52; // 52 weeks in a year
    document.getElementById('yearlyResult').innerText = `Total Yearly Salary: $${totalYearlySalary.toFixed(2)}`;
}

function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const salary = parseFloat(document.getElementById('employeeSalary').value);
    const type = document.getElementById('employeeType').value;

    if (!name || isNaN(salary) || salary < 0) {
        alert('Please enter valid employee details.');
        return;
    }

    const tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const salaryCell = newRow.insertCell(1);
    const typeCell = newRow.insertCell(2);

    nameCell.innerText = name;
    salaryCell.innerText = `$${salary.toFixed(2)}`;
    typeCell.innerText = type;

    // Clear input fields
    document.getElementById('employeeName').value = '';
    document.getElementById('employeeSalary').value = '';
    document.getElementById('employeeType').value = 'fullTime';
}

function calculateTotalSalaries() {
    const tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const rows = tableBody.getElementsByTagName('tr');
    let total = 0;

    for (let i = 0; i < rows.length; i++) {
        const salaryCell = rows[i].cells[1].innerText; // Get the salary cell
        const salaryValue = parseFloat(salaryCell.replace(/[$,]/g, '')); // Remove $ and convert to number
        total += salaryValue; // Sum up the salaries
    }

    // Display the total salaries
    document.getElementById('totalSalariesResult').innerText = `Total Salaries: $${total.toFixed(2)}`;
}