/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const folder=path.join(__dirname,'files');

const readFiles=()=>{
  return new Promise((resolve,reject)=>{
    fs.readdir(folder, (err, files) => {
      if (err) {
        return 'Error reading directory:'+err;
      }  
      const filesArray=[]
      files.forEach((file) => {
        filesArray.push(file);
      });
      resolve(filesArray);
    });
  })
}

const readFileData=(fileName)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(path.join(folder,fileName),'utf-8', (err, data) => {
      if (err) {
        return 'Error reading file: '+err;
      }
      resolve(data);
    });
  })
}
app.get('/files',async (req,res)=>{
  readFiles().then((data)=>{
    res.send(JSON.stringify(data));
  }).catch((error)=>{
    res.send(JSON.stringify('Error reading files'))
  })
})

app.get('/file/:filename',async (req,res)=>{
  const fileName=req.params.filename;
  readFiles().then((data)=>{
    if(data.includes(fileName)){
      readFileData(fileName).then((data)=>{
        res.send(JSON.stringify(data));
      }).catch(error => {
        res.send(`Error reading file: ${error}`)
      })
    }else{
      res.status(404).send("File not found")
    }
  }).catch((error)=>{
    res.send('Error reading files')
  })
})

app.get('*',(req,res)=>{
  res.status(404).send('Route not found');
})
app.listen(3000,() => {
  console.log("Listening on port 3000");
})


module.exports = app;