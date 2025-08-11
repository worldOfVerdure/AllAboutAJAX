function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 4000);
  });
}
async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log("Are you surrounding?");
  console.log(result);
  // Expected output: "resolved"
 }
asyncCall();
 