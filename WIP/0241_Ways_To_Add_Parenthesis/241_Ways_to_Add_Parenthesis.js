const apply = function(operand1, operand2, operator) {
    if (operator === "+") {
        return Number(operand1) + Number(operand2)
    } else if (operator === "-") {
        return Number(operand1) - Number(operand2)
    } else {
        return Number(operand1) * Number(operand2)
    }
}

const diffWaysToCompute = function(expression) {
    let answers = [];
    let foundOperator = false;

    for (let i = 0; i < expression.length; i++) {
        const c = expression.charAt(i);

        if ("+-*".includes(c)) {
            const left = diffWaysToCompute(expression.slice(0, i));
            const right = diffWaysToCompute(expression.slice(i + 1));

            foundOperator = true;

            left.forEach(leftAnswer => {
                right.forEach(rightAnswer => {
                    answers.push(apply(leftAnswer, rightAnswer, c));
                })
            })
        }
    }

    if (!foundOperator) {
        return [Number(expression)];
    }

    return answers;
}

console.log(diffWaysToCompute("3+3+1-1*4-7+1"));


// first operator second

// base cases
// first number 