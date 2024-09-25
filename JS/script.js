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
    showModal();
})
