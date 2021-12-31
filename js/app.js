//variables
const form = document.querySelector("#request-quote");
const html = new HTMLUI();

//EventListener
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    //display years
    html.displayYears();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const make = document.getElementById("make").value;
    const year = document.getElementById("year").value;
    const level = document.querySelector('input[name="level"]:checked').value;

    if (make === " " || year === " " || level === " ") {
      html.displayError("لطفا همه مقادیر را به درسی وارد کنید");
    } else {
      let resultDiv = document.querySelector("#result div");
      if (resultDiv !== null) {
        resultDiv.remove();
      }
      const insurance = new Insurance(make, year, level);
      const price = insurance.calculatorPrice(insurance);
      html.showResult(price, insurance);
    }
  });
}
