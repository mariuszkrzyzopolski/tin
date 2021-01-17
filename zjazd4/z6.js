function tree(height) {
   var i = height -1;
   var wide = 0;
   while (i >= 0) {
       console.log('*'.repeat(i) + ' '.repeat(wide) + '*'.repeat(i));
       i--;
       wide += 2;
       if (i === 0)  console.log('*'.repeat((height -1) * 2));
   }
};
