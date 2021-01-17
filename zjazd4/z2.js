function divided(from, to, div){
    var arr = [];
    for (var i = from; i <= to; i++) {
        if (i % div === 0) arr.push(i);
    }
   console.log(arr) 
};