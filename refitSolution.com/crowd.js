
let shareE1 = document.querySelector(".shares");
let amountE1 = document.querySelector(".amount");

const btnprocess = document.querySelector(".btn");


let totalShares, processedAmt;

totalShares = 9000;
processedAmt = 0;

shareE1.innerText = totalShares;
amountE1.innerText = processedAmt;


btnprocess.addEventListener("click", (e) => {

  let amount = document.querySelector("#no-of-unit").value;

  if (amount) {
    processedAmt = amount * 25;
    amountE1.innerText = processedAmt;

    totalShares -= amount;
    shareE1.innerText = totalShares;

    amount = 0;
    document.querySelector("#no-of-unit").value;

    console.log(totalShares);
    console.log(processedAmt);
    console.log(amount);
  } else {
    alert('Fill in the Input');
  }
});