function calculate(arg1, arg2, operation) {

    arg1 = Number(arg1);
    arg2 = Number(arg2);

    if (operation == "+") {
        return arg1 + arg2;
    }

    if (operation == "-") {
        return arg1 - arg2;
    }

    if (operation == "*") {
        return arg1 * arg2;
    }
}

module.exports.calculate = calculate;