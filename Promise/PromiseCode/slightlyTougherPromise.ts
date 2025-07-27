function delayDouble(n: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n * 2);
    }, 1000);
  });
}

Promise.resolve(5)
  .then(n => {
    console.log("Step 1:", n);
    return delayDouble(n); // returns a Promise!
  })
  .then(n => {
    console.log("Step 2:", n); // logs after 1 second
    return delayDouble(n);
  })
  .then(n => {
    console.log("Step 3:", n); // logs after another second
  });

/*
  Promise.resolve(5)
  .then(fn1) // Promise A
  .then(fn2) // Promise B
  .then(fn3); // Promise C

  Promise.resolve(5) is fulfilled, and:
  A Reaction Record with fn1 is added to its [[PromiseFulfillReactions]].
  .then(fn1) returns Promise A with its own [[PromiseFulfillReactions]], initially empty.
  When fn1 completes, Promise A settles → fn2 is added to its internal slot.
  And so on...
*/
