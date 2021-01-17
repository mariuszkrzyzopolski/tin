function calc(func, a, b, h) {
    return func(a, b, h)
}
function rectangle2(a, b) {
    return a * b
}
function triangle2(a, b, h) {
    return 1/2 * a * h
}
function trapeze2(a, b, h) {
    return 1/2 * (a + b) * h
}