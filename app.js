
// Login Button
var loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// deposit button event handler

const depositBtn = document.getElementById("add_deposit");
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
})

    // withdraw button event handler 
    const withdrawBtn = document.getElementById('add_withdraw');
    withdrawBtn.addEventListener('click', function () {
        const withdrawNumber = getInputNumber('withdrawAmount')
        updateSpanText('currentWithdraw', withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);
        document.getElementById("withdrawAmount").value = "";
    })

    
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount ;
}