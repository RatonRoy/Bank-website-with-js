// select the html elements 
const depositAmount = document.getElementById('deposit-amount');
// console.log(depositAmount);
const withdrawAmount = document.getElementById('withdraw-amount');
const balanceAmount = document.getElementById('balance-amount');
const depositeField = document.getElementById('deposite-field');
const withdrawField = document.getElementById('withdraw-field');
// const withdrawAmount = document.getElementById('withdraw-amount');
const depositeBtn = document.getElementById('deposite-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
// add event listener on the deposite btn 
depositeBtn.addEventListener('click', function () {
    // get the field value 
    const depositeFieldValue = depositeField.value; 
    const previousDepositeValue = depositAmount.innerText;
    // totall deposite value with new amount 
    const totallAmount = parseFloat(previousDepositeValue) + parseFloat(depositeFieldValue);
    // show the totall amount with previous amount 
    depositAmount.innerText = totallAmount;
    // get the previous balance
    const previousBalanceAmount = balanceAmount.innerText;
    // create totall balance with new add 
    const totallBalance = parseFloat(previousBalanceAmount) + parseFloat(depositeFieldValue);
    //show the totall amount 
    balanceAmount.innerText = totallBalance;
    // to clear input field use this  
    depositeField.value = " ";
})
// withdrawBtn event listener 
withdrawBtn.addEventListener('click', function () {
    // get the withdraw input value 
    let withdrawFieldValue = parseFloat(withdrawField.value); 
    // get the previous withdraw value 
    const previousWithDrawFieldValue = parseFloat(withdrawAmount.innerText);
    const totallWithdrawValue = withdrawFieldValue + previousWithDrawFieldValue; 
    withdrawAmount.innerText = totallWithdrawValue; 
      // get the previous balance
    const previousBalanceAmount = parseFloat(balanceAmount.innerText); 
    const remainingBalance = previousBalanceAmount - withdrawFieldValue; 
    balanceAmount.innerText = remainingBalance;
    withdrawField.value = " ";
    
})



const nameOfOrganization = document.getElementById("name").value;
   
console.log(nameOfOrganization);