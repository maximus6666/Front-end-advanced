 async function getRandomChinese(length) {
   let result = '';

   while (length > 0) {
     await new Promise((resolve) => {
       setTimeout(() => {
         const sign = String.fromCharCode((Date.now().toString()).substr(-5));
         result += sign;
         resolve();
       }, 50);
     });
     length--;
   }

   console.log(result);
   return result;
 }

 getRandomChinese(5);
