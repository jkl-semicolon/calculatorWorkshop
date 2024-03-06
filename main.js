const errorMessage = "Please enter numbers only.";

const numValidate = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  } else {
    return true;
  }
}

const getSum = (num1, num2) => {
  if (numValidate(num1, num2)) {
    return num1 + num2;
  } else {
    return errorMessage;
  }
}

console.log(getSum(1,4));