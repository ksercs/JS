var binaryFunction = function (operation) {
    return function (firstOperand, secondOperand) {
        return function (x, y, z) {
            return operation(firstOperand(x, y, z), secondOperand(x, y, z))
        }
    }
};

var unaryFunction = function (operation) {
    return function (operand) {
        return function (x, y, z) {
            return operation(operand(x, y, z))
        }
    }
};

var cnst = function (num) {
    return function () {
        return num
    }
};

var variable = function (arg) {
    return function (x, y, z) {
        switch (arg) {
            case 'x':
                return x;
            case 'y':
                return y;
            case 'z':
                return z;
        }
    }
};

var add = binaryFunction(function (first, second) {
    return first + second
});

var multiply = binaryFunction(function (first, second) {
    return first * second
});

var subtract = binaryFunction(function (first, second) {
    return first - second
});

var negate = unaryFunction(function (first) {
    return -first
});

var divide = binaryFunction(function (first, second) {
    return first / second;
});

var cube = unaryFunction(function (first) {
    return Math.pow(first, 3);

});

var cuberoot = unaryFunction(function (first) {
    return Math.pow(first, 1 / 3);
});
