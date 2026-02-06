//30 january 2026
/*console.log("hello world")
console.error("zero division error");
console.warn("");


let students={ name:"riyanshi", age:28, course="cse"};
console.table(students);*/


/*console.time("test");
for(let i=0;i<10000;i++){}

console.timeEnd("test");*/

/*console.group("cse24")
console.log("name:riyanshi");

console.groupEnd{};*/

/*console.count("click");
console.count("click");
console.count("click");
console.count("click");*/

//console.dir(document.body);

//6 february 2026
function add(p,q){
    return p+q;
}
console.log(add(10,20));

//arrow function
const multiply=(p,q)=> p*q;
console.log("arrow function",multiply(5,5));

//array
let arr=[10,20,30,40];
console.log(arr[0]);
arr.push(20);
arr.pop();
console.log(arr);

//object
let student={
    name:"riyanshi",
    age:18,
    course:"btech"
};

let today=new Date();

//table
let students={name:"riyanshi", age:18, course:"btech"};
console.table(students);

//math funnction
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));
console.log(Math.random());

//string
text="hello world";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("world"));
console.log(text.includes("java"));

//type conversion
let strnum="143";
let convert=Number(strnum);
console.log(convert);

//nan(not a number)
console.log(isNaN("hello"));
console.log(isNaN(123));

//dom manipulation(function kitni der baad execute hoga)
setTimeout(()=>{
    console.log("executed after 2 seconds");
},2000);

setInterval(()=>{
    console.log("executed every 3 seconds");
},3000);

//try catch
try{
    let result=x/0;
    console.log(result);
}catch(error){
    console.log("error");
}
finally{
    console.log("execution completed");
}