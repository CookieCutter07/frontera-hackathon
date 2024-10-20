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