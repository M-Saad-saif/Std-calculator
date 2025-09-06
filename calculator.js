let screen = document.querySelector(".text-area");
let btns = document.querySelectorAll(".buttons");

let calculation = [];
let equation;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerHTML;

    if (value === "Clear") {
      calculation.pop();
      equation = calculation.join("");
      screen.innerHTML = equation || ".";
    } else if (value === "All Clear") {
      calculation = [];
      screen.innerHTML = ".";
    } else if (value === "=") {
      if (screen.innerHTML === ".") {
        screen.innerHTML = "Enter number";
      } else {
        equation = calculation.join("");
        screen.innerHTML = eval(equation);
      }
    } else {
      calculation.push(value);
      equation = calculation.join("");
      screen.innerHTML = equation;
    }
  });
});
