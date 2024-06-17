document.getElementById('calculate-btn').addEventListener('click', () => {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;

        document.getElementById('tip-amount').innerText = tipAmount.toFixed(2);
        document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
    } else {
        alert('Please enter valid numbers for bill amount and tip percentage');
    }
});
