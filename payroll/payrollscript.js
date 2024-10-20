function calculatePay() {
    // Get the hourly rate from the input field
    const hourlyRate = parseFloat(document.getElementById('hrate').value);
    const hoursWorked = 40;

    // Check if the hourly rate is a valid number
    if (isNaN(hourlyRate) || hourlyRate < 0) {
        document.getElementById('result').innerText = 'Please enter a valid hourly rate.';
        return;
    }

    // Calculate the total pay
    const totalPay = hourlyRate * hoursWorked;

    // Display the result
    document.getElementById('result').innerText = `Total Pay for ${hoursWorked} hours: $${totalPay.toFixed(2)}`;
}

function calculatePayMonthly() {
    const weeklyRate = parseFloat(document.getElementById('mrate').value);
    const weeksInMonth = 4; // Assuming 4 weeks in a month

    // Check if the weekly rate is a valid number
    if (isNaN(weeklyRate) || weeklyRate < 0) {
        document.getElementById('resultMonthly').innerText = 'Please enter a valid weekly rate.';
        return;
    }

    // Calculate the total monthly pay
    const totalPayMonthly = weeklyRate * weeksInMonth;

    // Display the result
    document.getElementById('resultMonthly').innerText = `Total Pay for ${weeksInMonth} weeks: $${totalPayMonthly.toFixed(2)}`;
}