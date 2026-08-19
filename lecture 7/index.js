const http = require("http")

 const Server=http.createServer((req,res)=>{

// res.write("<h1>Hello World</h1>")
//  res.end()

// if(req.url === "/"){
//         res.write("<h1> Home Page</h1>")
//         res.end();
//     }

//     if(req.url === "/about"){
//         res.write("<h1> About Page</h1>")
//         res.end();
//     }

//     console.log (req.url)
//     res.end()

// console.log(req.method)
// res.end()

// if(req.method==="GET"){
//     res.write("<h1>GET method</h1>")
//     res.end()
// }

// if(req.method==="POST"){
//     res.write("<h1>POST method</h1>")
//     res.end()
// }

// if(req.method==="DELETE"){
//     res.write("<h1>DELETE method</h1>")
//     res.end()
// }


// if(req.method==="PUT"){
//     res.write("<h1>PUT method</h1>")
//     res.end()
// }

// if(req.url==="/user" && req.method==="GET"){
//   res.write("<h1>Data Retrieving</h1>")
//    res.end()

// }

// if(req.url==="/user" && req.method==="POST"){
//   res.write("<h1>Data Created</h1>")
//    res.end()

// }

// console.log(req.headers.token)
// res.end()


let body = ""

req.on("data",(chunk)=>{
    body +=chunk

})

req.on("end",()=>{
    console.log(body)
    res.end()
})


})

Server.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})
// console.log(req.url)
// res.end()
// Server.listen(3000,()=>{
//     console.log("Server is running on PORT 3000")
// })
