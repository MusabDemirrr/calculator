function operator(num1, oper, num2) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let result;
    if (oper == "+") {
        result = num1 + num2
    }
    else if (oper == "-") {
        result = num1 - num2
    }
    else if (oper == "*") {
        result = num1 * num2
    }
    else if (oper == "/") {
        if (num2 == 0) {

        }
        result = num1 / num2
    }

    return Math.round(result);
}


const display = document.getElementById("display")

const numbers = document.querySelectorAll(".numbers")
const operants = document.querySelectorAll(".operants")

let num1 = "";
let num2 = "";
let op = "";
let result = "";


function calculator() {



    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            if (result !== "") {
                display.textContent = "";
                result = ""
                op = "";
                num1 = "";
                num2 = "";
            }

            if (op == "") {
                display.textContent += number.textContent
                num1 = display.textContent
            }
            else if (op !== "") {
                if (num2 == "") {
                    display.textContent = "";
                }
                display.textContent += number.textContent
                num2 = display.textContent
            }

        })
    })

    operants.forEach((operant) => {
        operant.addEventListener("click", () => {
            if (operant.textContent == "AC") {
                num1 = "";
                num2 = "";
                result = "";
                op = ""
                display.textContent = "";
            }
            else if (result !== "" && operant.textContent !== "=") {
                num1 = result;
                op = operant.textContent
                num2 = ""
                result = ""
            }

            else if (result !== "" && operant.textContent == "=") {
                result = operator(result, op, num2) + "";
                display.textContent = result
            }


            else if (num1 !== "" && op == "" && operant.textContent !== "=") {
                op = operant.textContent
            }

            else if (num1 !== "" && num2 !== "" && op !== "") {
                if (op == "/" && parseInt(num2) == 0) {
                    alert("Divided by zero")
                    alert("calculation have restarted")
                    num1 = ""
                    num1 = ""
                    op = ""
                    result = ""
                    display.textContent = ""

                }
                else {
                    if (operant.textContent !== "=") {



                        result = operator(num1, op, num2) + "";
                        num1 = ""
                        num2 = ""
                        display.textContent = result
                        op = operant.textContent




                    }
                    else {
                        result = operator(num1, op, num2) + "";
                        display.textContent = result
                    }

                }


            }




        })
    })










}
calculator()


