const myPromiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("test");
  }, 2000);
});

myPromiseObj.then((value) => {
  console.log(value);
});

const p = Promise.resolve(5);

const newPromise = p.then(n => {
  return n * 2; // returns 10
});

/*
Let's explore the inner mechanics of this code above. In the comment section bellow this, I will
detail the stack execution.
We can notice the new keyword that is used to instantiate our Promise object which is stored in
myPromiseObj. We supply the executor function which is run synchronously as the constructor is
called.

Here is my executor function:
(resolve, reject) => {
  setTimeout(() => {
    resolve("test");
  }, 2000)
}

The resolve and reject functions are internally supplied by the JS engine. ECMA script requires a JS
engine to provide the internals for these functions. This makes resolve and reject first-class
function identifiers wrapper functions as they expose the internals of the Promise API in a safe and
controlled manner that helps us avoid:

Being out of the executor function we then see the myPromiseObj.then() here. Now is a great time to
look at the Internal Promise Record.

Think of a Promise as a mini state machine. Behind the scenes, it's an object with hidden internal
fields like:

[[PromiseState]]: pending, fulfilled, or rejected

[[PromiseResult]]: the value it resolves or rejects with

[[PromiseFulfillReactions]]: an array of Reaction Record objects for success handlers (.then)
E.G.
promise.then(a)
promise.then(b)
[[PromiseFulfillReactions]] = [
  { handler: a, capability: promiseA2, type: "fulfill" },
  { handler: b, capability: promiseB2, type: "fulfill" }
]*(1)

[[PromiseRejectReactions]]: an array of Reaction Record objects failure for handlers (.catch)
*/

/*
*(1) Capability 

*/
