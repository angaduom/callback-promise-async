


var fs = require('fs');

// what is asynchronosity?

console.log("Before readFile")
fs.readFile('text.txt','utf8', function(err, contents) {
  console.log('Async read file', contents.length);
});
console.log("After readFile");


// lets try using readFileSync


 console.log("Before readFileSync");
 var text=fs.readFileSync('text.txt','utf-8');
 console.log(text.length);
 console.log("After readFileSync");


//so what is a callback

function readFileCallback(fileName,callback){
  console.log("In the function");
  fs.readFile(fileName,'utf-8',(err,data)=>{
    if(err)
      console.log(err)
      console.log(data.length)
      callback(data);
  })
}//readFile

console.log("Before");
readFileCallback('text.txt',function(data){
  console.log(data.length)
})
console.log("After");

new Promise((resolve,reject)=>{
  fs.readFile('text.txt','utf-8',(err,data)=>{
    if(err)
      reject(err)
    else{
      //if the data was read correctly
      resolve(data);
    }
  })
}).then((result)=>{
  console.log("promise .then()")
  console.log("Promise result",result.length)
}).catch(function(err){
  console.log("catch");
  console.log(err)
})

//readFileAsync
function readFileAsync(){
  return new Promise(function(resolve, reject){
    fs.readFile('text.txt','utf-8',(err,data)=>{
      resolve(data);
    })
  })
}
read();
async function read(){
  try{
    var text = await readFileAsync();
    console.log("Async Await",text.length);
  }
  catch(err){
    console.log(err);
  }
}
