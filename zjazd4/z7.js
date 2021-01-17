function calc_area(f, a, b, h){
    switch(f) {
        case 'rectangle':
            console.log(rectangle(a,b));
            break;
        case 'triangle':
            console.log(triangle(a,h));
            break;
        case 'trapeze':
            console.log(trapeze(a,b,h));
            break;
        default:
            console.log('not valid');
    }
}
function rectangle(A, B) { return A * B };
function triangle(A, H) { return (A * H) / 2 };
function trapeze(A, B, H) { return ((A + B) * H) / 2};