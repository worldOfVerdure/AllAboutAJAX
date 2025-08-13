const delayed = new Promise((resolve) => {
  setTimeout(() => resolve("done"), 1000);
});

const wrapped = Promise.resolve(delayed);

console.log(wrapped === delayed); // true
