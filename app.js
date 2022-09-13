const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const nextBtn = document.querySelector("next-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const numberOfNotes = document.querySelectorAll(".no-of-notes");

checkBtn.addEventListener("click", function isValidate() {
  hideMsg();
  const billAmountValue = Number(billAmount.value);
  const cashGivenValue = Number(cashGiven.value);
  if (billAmount.value > 0) {
    if (cashGivenValue >= billAmountValue) {
      const amountToBeGiven = cashGiven.value - billAmount.value;
      calculateChange(amountToBeGiven);
    } else {
      showMessage("Cash given should be greater than or equal to Bill amount");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function calculateChange(amountToBeGiven) {
  for (let i = 0; i < availableNotes.length; i++) {
    const noOfNotes = Math.trunc(amountToBeGiven / availableNotes[i]);
    amountToBeGiven = amountToBeGiven % availableNotes[i];
    numberOfNotes[i].innerText = noOfNotes;
  }
}

function hideMsg() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
