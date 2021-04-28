


function GetSqrt() {  
   var args = ParseArguments();  
   args.forEach(function(num) {  
  
       console.log(" Number is " + num + " and its square " + num * num);  
   })  
}  
GetSqrt();  

function ParseArguments() {  
   var input = [];  
   var arguments = process.argv;  
   arguments.slice(2).forEach(function(num) {  
       input.push(num);  
   });  
   return input;  
} 