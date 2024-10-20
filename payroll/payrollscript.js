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