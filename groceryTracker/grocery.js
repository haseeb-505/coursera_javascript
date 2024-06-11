let amount_1;
let amount_2;
let amount_3;

function totalAmount() {
    amount_1 = parseFloat(document.getElementById("Grocery-1").value) || 0;
    amount_2 = parseFloat(document.getElementById("Grocery-2").value) || 0;
    amount_3 = parseFloat(document.getElementById("Grocery-3").value) || 0;
    
    
    let grandSum = amount_1 + amount_2 + amount_3;
    document.getElementById("Total").innerText = `The total amount is:  $ ${grandSum}`;
}