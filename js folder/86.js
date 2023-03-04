let a=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },2000);
    });
}

(async()=>{
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let k = await a();
console.log(k);
})();