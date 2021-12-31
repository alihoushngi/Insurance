//classes
// every thing related to insurance
class Insurance {
  constructor(make, year, level) {
    this.make = make;
    this.year = year;
    this.level = level;
  }

  calculatorPrice(info) {
    let price;
    let base = 2000000;

    const make = info.make;

    switch (make) {
      case "1":
        price = base * 1.2;
        break;
      case "2":
        price = base * 1.4;
        break;
      case "3":
        price = base * 1.8;
        break;
    }

    const year = info.year;
    const deff = this.deffYear(year);

    price = price - ((deff * 3) / 100) * price;

    const level = info.level;
    price = this.calculatorLevel(price, level);

    return price;
  }

  calculatorLevel(price, level) {
    if (level == "basic") {
      price = price * 1.2;
    } else {
      price = price * 1.5;
    }

    return price;
  }

  deffYear(year) {
    let persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
      ],
      arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g,
      ],
      fixNumbers = function (str) {
        if (typeof str === "string") {
          for (var i = 0; i < 10; i++) {
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };
    //max years
    const now = new Date().toLocaleDateString("fa-IR");
    let years = now.slice(0, 4);
    let max = fixNumbers(years);

    year = max - year;
    return year;
  }
}
//object
// every thing related to HTML
class HTMLUI {
  displayYears() {
    let persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
      ],
      arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g,
      ],
      fixNumbers = function (str) {
        if (typeof str === "string") {
          for (var i = 0; i < 10; i++) {
            str = str
              .replace(persianNumbers[i], i)
              .replace(arabicNumbers[i], i);
          }
        }
        return str;
      };
    //max years
    const now = new Date().toLocaleDateString("fa-IR");
    let years = now.slice(0, 4);
    let max = fixNumbers(years);

    //min years
    let min = max - 20;

    //access to select tag
    const selectYear = document.querySelector("#year");

    //create for loop for <option> tag
    for (let i = max; i >= min; i--) {
      //create Element
      const option = document.createElement("option");
      option.value = i;
      option.innerText = i;

      //option append to selectYear

      selectYear.appendChild(option);
    }
  }

  displayError(err) {
    const div = document.createElement("div");
    div.classList = "error";
    div.innerText = err;

    form.insertBefore(div, document.querySelector(".form-group"));
  }

  showResult(price, info) {
    const result = document.querySelector("#result");
    const div = document.createElement("div");

    let make = info.make;

    switch (make) {
      case "1":
        make = "پراید";
        break;
      case "2":
        make = "اپتیما";
        break;
      case "3":
        make = "پورشه";
        break;
    }

    let level = info.level;

    if (level == "basic") {
      level = "ساده";
    } else {
      level = "کامل";
    }

    div.innerHTML = `
        <p class="header">فاکتور خرید</p>
        <p>مدل خودرو : ${make}</p>
        <p>سال ساخت : ${info.year}</p>
        <p>نوع بیمه : ${level}</p>
        <p class="total">قیمت نهایی : ${price}</p>
        `;

    const spinner = document.querySelector("#loading img ");
    spinner.style.display = "block";

    setTimeout(() => {
      spinner.style.display = "none";
      result.appendChild(div);
    }, 700);
  }
}

//get years to show
