// // // // const os = require("os")

// // // // console.log(os.platform())

// // // // console.log(os.arch())

// // // // console.log(os.hostname())

// // // // console.log(os.version())

// // // // console.log(os.uptime())

// // // // console.log(os.totalmem()/1024/1024/1024)

// // // // console.log(os.freemem()/1024/1024/1024)

// // // // console.log(os.cpus().length)

// // //  const fs = require("fs")

// // // fs.writeFile("data.txt","hello ",(err)=>{
// // //     if (err) console.log(err)
// // //         else console.log("File Written")
// // // })

// // // fs.readFile("data.txt","utf8",(err,res)=>{
// // //     if (err) console.log(err)
// // //         else console.log(res)
// // // })

// // // fs.appendFile("data.txt"," 3rd sem",(err)=>{
// // //     if (err) console.log(err)
// // //         else console.log("File updated")
// // // })

// // // fs.unlink("data.txt",(err)=>{
// // //     if (err) console.log(err)
// // //         else console.log("File Deleted Successfully")
// // // })
// // //  const fs = require("fs")

// //  const fs = require("fs")
// // // const { stringify } = require("querystring")
// // //  const data = {name:"Harshita",Age:19,state:"Haryana"}
// // // fs.writeFile("write.json",JSON.stringify(data,null,2),(err)=>{
// // //     if (err) console.log(err)
// // //         else console.log("File Written")
// // // })

// // // let newData = {name:"John",Age:25,city:"Mumbai"}

// // // fs.readFile("write.json","utf8",(err,res)=>{
// // //     if(err) console.log(err)
// // //         else{
// // //     let temp =JSON.parse(res)

// // //     temp.push(newData)

// // //     fs.writeFile("write.json",JSON>stringify(temp,null,2),(err)=>{

// // //         if(err) console.log(err)
// // //             else console.log("File updated")
// // //     })
// // // }
// // // }
// // // )

// // // const path = require("path")

// // // // const file = path.join("home","data","user.json")

// // // // console.log(file)

// // // // console.log(path.dirname("home/user/data/file.txt"))
// // // // console.log(path.basename("home/user/data/file.txt"))
// // // console.log(path.extname("home/user/data/file.txt"))

// // // const filePath = path.join("home","data","user","file.txt")

// // // fs.mkdir((filePath,{recursive:true},(err) => {
// // //     if (err)  console.log(err)
// // // }
// // // ))
// // const path = require("path")    
// // const file= path.join("home","data","data.json")
// // console.log(file)

// // console.log(path.dirname("home/data/data.json"))

// // console.log(path.basename("file.txt"))

// // console.log(path.extname("home/user/data/file.txt"))


// // const filePath = path.join("home","user","data","file.txt")
// // console.log(filePath)

// // fs.mkdir(path.dirname(filePath),{recursive: true},(err)=>{
// //     if (err) console.log(err)
// //         else{
// //             fs.writeFile(path.basename(filePath),"Hello World",(err)=>{
// //                 if(err) console.log(err)
// //                     else console.log("File Written")
// //                 })
// // }})

// const crypto = require("crypto")

// let password1 = "Harshita2911"

// let password2 = "Harshita2911"


//  let encrypt =crypto.createHash("sha256").update(password1).digest("hex")

//  let encrypt2 =crypto.createHash("sha256").update(password2).digest("hex")

// console.log(encrypt,"\n",encrypt2)

const dns = require("dns")

dns.lookup("google.com",(err,address,family)=>{
    console.log(address)
    console.log(family)
})
