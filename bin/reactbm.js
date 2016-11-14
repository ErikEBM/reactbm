#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const exec = require('child_process').exec;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what name do you want choose?', (answer) => {
  // TODO: Log the answer in a database
 // console.log('Thank you for your valuable feedback:', answer);
 // fs.mkdir(answer);
  exec(`git clone https://github.com/ErikEBM/react_init  ${answer} && cd ${answer} && npm install`, (error, stdout, stderr)=>{
    if (error){
      console.error(`exec error: ${error}`);

      return;
    }
   // console.log(`stdout: ${stdout}`);
   // console.log(`stderr: ${stderr}`);
   console.log("espere un momento, el comando se está ejecutando con éxito...");
  rl.close();
  

  });
  

});

