function getFib(length) {
    var default_fib = [0, 1];

    for (var i = 2; i <= length; i++) {
        default_fib.push(default_fib[i -2] + default_fib[i-1]);
    }

    console.log(default_fib);
}