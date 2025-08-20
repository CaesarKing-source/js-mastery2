const pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 10);
    if (num > 5) res(num);
    else rej(num);
  }, 2000);
});

pr.then(function (num) {
  console.log("Resolve With", num);
}).catch(function (num) {
  console.log("Rejected with", num);
});
