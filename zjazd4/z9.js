function sil(n) {
    if (n < 0) 
          return -1;
    if (n == 0) 
        return 1;
    else {
        return (n * sil(n - 1));
    }
  };

function get_newton(numIdx, currHeight) {
    return sil(numIdx) / (sil(currHeight) * sil(numIdx - currHeight));
}

function create_pascal(height) {
    var triangle = [];

    if (height == 0) return triangle;

    triangle.push([1]);

    if (height == 1) return triangle;

    for (var i = 1; i < height; i++) {
        var middleTriangle = [];
        for (var j = 0; j <= i; j++) {
            middleTriangle.push(get_newton(i,j));
        }
        triangle.push(middleTriangle);
        helperArr = [];
    }
    
    console.log(triangle);
}
