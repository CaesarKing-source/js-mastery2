const pr = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10);
        if(num > 5) resolve(num);
        else reject(num);
    }, 4000);
});

async function testNum() {
    try {
        let value = await pr;
        console.log('Resolved with', value)
    }
    catch(err) {
        console.log('Rejected with', err);
    }
}
testNum()