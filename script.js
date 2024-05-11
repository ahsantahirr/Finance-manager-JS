var html_income = document.getElementById("income")
var html_expenditure = document.getElementById("expenditure")
var html_balance = document.getElementById("balance")
var html_savings = document.getElementById("savings")

function addincome() {
    var user_input = document.getElementById("input")
    var user_input_value = user_input.value;
    html_income.innerHTML = user_input_value;
    balanceAndsavings();

}
function addexpense() {
    var user_input = document.getElementById("input")
    var user_input_value = user_input.value;
    html_expenditure.innerHTML = user_input_value;
    balanceAndsavings()

}
function balanceAndsavings() {
    var income = parseInt(html_income.innerHTML);
    var expenditure = parseInt(html_expenditure.innerHTML)

    html_balance.innerHTML = income - expenditure;
    html_savings.innerHTML = income - expenditure;
}

function addTransaction() {
    var table = document.getElementById("transactionTable").getElementsByTagName('tbody')[0];
    var income = parseInt(html_income.innerHTML);
    var expenditure = parseInt(html_expenditure.innerHTML)
    var input_button = document.getElementById("inc")
    var currentDate = new Date().toLocaleDateString();
    var currentTime = new Date().toLocaleTimeString();
    var newRow = table.insertRow(table.rows.length);
    var balance = income - expenditure;

    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    if (input_button === document.activeElement) {
        cell1.innerHTML = "Income";
    } else {
        cell1.innerHTML = "Expenditure";
    }
    cell2.innerHTML = currentDate;
    cell3.innerHTML = currentTime;
    cell4.innerHTML = balance;
}




