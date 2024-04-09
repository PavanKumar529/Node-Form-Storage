// const http = require("http")

// const PORT = 2000
// const hostName = "127.0.0.4"
// const server = http.createServer((req, res) => {
//   res.write("<h1>Hello, Pavan</h1>")
//   res.end()
// })

// server.listen(PORT, hostName, () => {
//   console.log(`server started at http://${hostName}:${PORT}`);
// })

const http = require("http");
const fs = require("fs");
// const path = require("path");


const PORT = 2000;
const hostName = "127.0.0.5";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method, url);
  
  if (method == "GET") {
    if (url == "/") {
      let data = fs.readFileSync("./public/html/index.html", "utf-8")
      // console.log(data)
      res.write(data);
      // if (url == "/png") {
      //   let data = fs.readFileSync("./public/html/PCS4.png", "utf-8");
      //   res.write(data);
      //   res.end();
      // }
      res.end();
    }

    if (url == "/style") {
      let data = fs.readFileSync("./public/css/index.css", "utf-8");
      res.write(data);
      res.end(); 
    }
    if (url == "/pavan") {
      let data = fs.readFileSync("./public/images/Pavan.png");
      res.write(data);
      res.end();
    }
    

    if (url == "/about") {
      let data = fs.readFileSync("./public/html/about.html", "utf-8");
      res.write(data);
      res.end();
    }
    if (url == "/contact") {
      let data = fs.readFileSync("./public/html/contact.html", "utf-8");
      res.write(data);
      res.end();
    }
    if (url == "/signup") {
      let data = fs.readFileSync("./public/html/signup.html", "utf-8");
      res.write(data);
      res.end();
    }
  }

  if(method == "POST") {
    if(url == "/newuser") {
      req.on("data",(data) => {
        console.log(data.toString());
        let newuser = JSON.parse(data.toString());
        let users = fs.readFileSync("./users.json", "utf-8") ? JSON.parse(fs.readFileSync("./users.json", "utf-8")) : []
        users.push(newuser)
        fs.writeFileSync("./users.json", JSON.stringify(users))
        res.write(JSON.stringify({msg: "Data Stored in Database"}))
        res.end()
      })
    }
  }
  
});

server.listen(PORT, hostName, () => {
  console.log(`server started at http://${hostName}:${PORT}`);
});
