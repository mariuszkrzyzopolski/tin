function pythTree(n1, n2, n3){
    var numbers = [n1, n2 ,n3].sort((a, b) => a-b );
    return Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2) === Math.pow(numbers[2], 2);
}