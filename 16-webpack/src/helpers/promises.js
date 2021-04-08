function getSign() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = '';
      const sign = String.fromCharCode((Date.now().toString()).substr(-5));
      result += sign;
      resolve(result);
    }, 50);
  });
}

async function getRandomChinese(length) {
  let result = '';
  let i = 0;

  while (length > i) {
    const sign = await getSign();
    length--;
    result += sign;
  }

  return result;
}

export {getSign};
