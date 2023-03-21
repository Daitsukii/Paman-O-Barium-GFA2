function add(x, y) {
    document.getElementById("result").innerHTML = "The sum of <strong>" + x + "</strong> and <strong>" + y + "</strong> is <strong>" + (parseFloat(x)+parseFloat(y)) + "</strong>.";
    isNumber(x);
    isNumber(y);
}
function sub(x, y) {
    document.getElementById("result").innerHTML = "The difference of <strong>" + x + "</strong> and <strong>" + y + "</strong> is <strong>" + (parseFloat(x)-parseFloat(y)) + "</strong>.";
    isNumber(x);
    isNumber(y);
}
function tim(x, y) {
    document.getElementById("result").innerHTML = "The product of <strong>" + x + "</strong> and <strong>" + y + "</strong> is <strong>" + (parseFloat(x)*parseFloat(y)) + "</strong>.";
    isNumber(x);
    isNumber(y);
}
function div(x, y) {
    if (y == 0) {
        document.getElementById("result").innerHTML = "<em>ERROR: Division by 0</em>";
    } else {
        document.getElementById("result").innerHTML = "The quotient of <strong>" + x + "</strong> and <strong>" + y + "</strong> is <strong>" + (parseFloat(x)/parseFloat(y)) + "</strong>.";
    }
    isNumber(x);
    isNumber(y);
}
function mod(x, y) {
    if (y == 0) {
        document.getElementById("result").innerHTML = "<em>ERROR: Division by 0</em>";
    } else {
        document.getElementById("result").innerHTML = "The remainder when dividing <strong>" + x + "</strong> by <strong>" + y + "</strong> is <strong>" + (parseFloat(x)%parseFloat(y)) + "</strong>.";
    }
    isNumber(x);
    isNumber(y);
}
function isNumber(x) {
    if (isNaN(x) || x == '') {
        document.getElementById("result").innerHTML = "<em>Please insert a number in both text boxes.</em>";
    }
}