document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    let InputMoney =parseFloat(document.getElementById('input-money').value);
    let accBalance = parseFloat(document.getElementById('acc-balance').innerText);
    let secOneBalance = parseFloat(document.getElementById('section-one-balance').innerText);
    let newAccBalance = accBalance - InputMoney;
    let newSecOneBalance = secOneBalance + InputMoney;
    document.getElementById('acc-balance').innerText = newAccBalance;
    document.getElementById('section-one-balance').innerText = newSecOneBalance;
    document.getElementById('input-money').value = '';
})
// ---------------section two---------------
document.getElementById('donate-btn-two').addEventListener('click', function(event){
    event.preventDefault();
    let InputMoneyTwo =parseFloat(document.getElementById('input-money-two').value);
    let accBalance = parseFloat(document.getElementById('acc-balance').innerText);
    let secOneBalanceTwo = parseFloat(document.getElementById('section-two-balance').innerText);
    let newAccBalanceTwo = accBalance - InputMoneyTwo;
    let newSecTwoBalance = secOneBalanceTwo + InputMoneyTwo;
    document.getElementById('acc-balance').innerText = newAccBalanceTwo;
    document.getElementById('section-two-balance').innerText = newSecTwoBalance;
    document.getElementById('input-money-two').value = '';
})

// ---------------section three---------------
document.getElementById('donate-btn-3').addEventListener('click', function(event){
    event.preventDefault();
    let InputMoney3 =parseFloat(document.getElementById('input-money3').value);
    let accBalance = parseFloat(document.getElementById('acc-balance').innerText);
    let secOneBalance3 = parseFloat(document.getElementById('section-3-balance').innerText);
    let newAccBalance3 = accBalance - InputMoney3;
    let newSec3Balance = secOneBalance3 + InputMoney3;
    document.getElementById('acc-balance').innerText = newAccBalance3;
    document.getElementById('section-3-balance').innerText = newSec3Balance;
    document.getElementById('input-money3').value = '';
})