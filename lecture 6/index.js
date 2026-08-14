// console.log(process.pid)

// console.log(process.ppid)

// console.log(process.uptime())

// console.log(process.argv[6])

function addition(a,b){
    return Number(a)+Number(b);

}

console.log(addition(process.argv[2],process.argv[3]))