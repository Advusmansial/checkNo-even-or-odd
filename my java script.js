function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }

  function checkEvenOrOdd() {
    let num = document.getElementById("number").value;
    let result = evenOrOdd(num);
    document.querySelector(".result").textContent = `${num} is ${result}.`;
  }
//   function isEven(num) {
//     return num % 2 == 0;
//   }
  
//   function isOdd(num) {
//     return num % 2 == 1;
//   }