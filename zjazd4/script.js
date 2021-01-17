function pasc(n, a){

      if (n < 2) return a; 

      var last = a[a.length-1];
      var current = [1];

      for (var i = 1; i < last.length; i++) {
        current[i] = last[i] + last[i-1];
      }
      current.push(1);
      a.push(current);

      return pasc(n-1, a);
}

