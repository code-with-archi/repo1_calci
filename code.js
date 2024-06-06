// console.log("archita");
// console.log("archita gupta");
// console.log("i love javascript");
//  let name_1="tony stark";
// console.log(name_1);
// x=null;
// y=undefined;
// console.log(x);
// console.log(y);
// let name_2="archiiii";
// console.log(name_2);
// let num=25;
// num="aaaaaaa";
// console.log(num);
// let aa;
// typeof aa;
// console.log(typeof a);
// const student={
//     fullName :"rahul kumar",
//     age:20,
//     marks:2.1,
//     isPass:true

// };
// student.age= student.age+1;
// console.log(student);
// console.log(typeof student);
// console.log(student.age);
// const product={
//     product_name:"parker jotter standard CT ball pen(black)",
//     rating: 4,
//     offer:5,
//      cost: 270
     
// };
// console.log(product);
/*const profile={
    name:"archi",
    followers:288526,
    following:458,
    isFollow:true,
    no_of_post:54,
    bio:"enterpreneur"


};
console.log(profile);
console.log(profile.followers);*/
// let mode="dark";
// let color;
// if(mode=="dark-mode"){
//     color="black";
// }
// else {
//     color="white";
// }
// console.log(color);
// alert("hello");
// alert("hello");
//  let a=prompt("enter the number");
//  console.log(a);
//  if(a%5===0){
//     console.log(a +" is a  multiple of 5");
//  }
//  else{
//     console.log(a +" is not  a  multiple of 5" );
//  }
// let score=prompt("enter your score(0-100)");
// if(score>=80 && score <=100){
//     console.log("A GRADE");
// }
// else if(score>=70 && score <=89){
//     console.log("B GRADE")
// }
// else if(score>=60 && score<=69){
//     console.log("C GRADE")

// } else if( score>=50 && score <=59){
//     console.log("D grade")
// }else{
//     console.log("f grade")
// }
// for  of loop return each letter of the strinng
// let name="archiii";
// let size=0;
// for(let  i of name ){
//     console.log("i=" +i);
//     size++;
// }
// console.log("number os times loop has run"+ size);
//for -inloop written the key of objects/arrays
// const student={
//     name:"archii",
//     age:25,
//     cgpa:10,
//     isPass: true

// };
// for(let i in student){
//     console.log(i);
//     console.log(student[i]); //not like this student.i
// }
// 
// let gameNum=25;
//  let userNum=prompt("guess the game number ");
//  while(userNum!=gameNum){
//     userNum=prompt("wrong guess, try again");
//  }
//  console.log("congrats.u entered the right number");
// strings
// l
// let str="archin utngi urngotmi   ";
// strNew=str.slice(3,11);
// console.log(strNew);
// str_n=str.trim();
// console.log(str_n);
// strnew=str.charAt(5);
// console.log(strnew);
// str1="archii loves";
// str2=" bebaaa"
// console.log(str1.concat(str2));
// let name=prompt("enter full name");
// console.log("username:"+"@"+name+name.length);
//Array
// let marks=[45,85,4125]
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);
// let cities=["delhi","agra","kanpur","bombay"];
// for (let city of cities){
//     console.log(city);

// let marks=[85,52,44,37,76,60];
// let a=marks.length;
// let sum=0;
// for(let i of marks){
//     sum+=i;
// }
// console.log("avg of all the numbers is "+sum/a);
//push method of array
// let fooditems=["mango"," lichi","apple","banana"];
// console.log(fooditems);
// console.log(`length of the given array ${fooditems.length}`);
// fooditems.push("mmmm");
// console.log(fooditems);
// console.log(`length of the given array ${fooditems.length}`);
// fooditems.push("paneer","cheese","choco.");
// console.log(fooditems);
// let val=fooditems.pop();
// console.log(fooditems);
// console.log(val);
// let str=fooditems.toString()// doesnot change in the original array
// console.log(typeof str);
// //concat the arrays
// let marvelHeroes=["thor","ironman","spiderman"];
// let dcHeroes=["superman","batman"];
// let indianHeroes=["shaktiman","krish"];
// let heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);
// let arr=[1,5,9,7,10,15];
// arr.splice(3,2,100,101);
// console.log(arr);
// let company=["bloomberg","microsoft","uber","google","ibm","netflix"];
// console.log(company);
// company.splice(0,1);
// console.log(company);
// company.splice(1,1,"ola");
// console.log(company);
// company.splice(5,0,"amazon");
// console.log(company);
// function functionname(){

// }
// functioncall/invoke==functionname()
// parameter passed during functioncall are called arguments
//during func.definition parameter
// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("ilove js");
// function sum(x,y){//local variblscope
//     return x+y;
//     console.log()
// }
// let val=sum(3,4);
// console.log(val);
//arrow function
//  const arrowSum=(a,b)=> {
//     console.log(a+b);
// }
// arrowSum(3,4);
// console.log(arrowSum);
// const arrowMul=(a.b)=>{
//     console.log (a*b);
// }
// arrowMul(7,2);
// function countvwl(str){
//     for(let i ;i<=str.length ; i++){
//         str.toUpperCase();
//         let ch=str.charAt(i);
//         if(ch ==='A'||ch ==='E'||ch ==='I'||ch ==='O'||ch ==='U' )
//         {
//             console.log(ch);
//         }
            
//     }

// } DOM document object model
// console.dir(document.body.childNodes[3].style.color="red");
// console.log(document.body);
// document.body.style.background="pink";
// console.dir(document.body);
// // let heading = document.getElementById("heading");
// // console.dir(heading);
// let headings=document.getElementsByClassName("heading-class");
// console.dir(headings);
// let paraghs=document.getElementsByTagName("p");
// console.dir(paraghs);
// let elements=document.querySelector("p"); // return first matching element
// console.dir(elements);
// let bodies=document.querySelectorAll("body");
// console.dir(bodies);
// let elementsall=document.querySelectorAll("p"); // return ALL matching element in form of nodelist
// console.dir(elementsall);
// let classsolo=document.querySelector(".heading-class"); // return first matching element when access by classname type .classname 
// console.dir(classsolo);
// let classall=document.querySelectorAll(".heading-class"); // return ALL matching element in form of nodelist when access by classname type .classname 
// console.dir(classall);// for id use # id works only for qurerysleector not with all queryselector
// console.log(elements.tagName);
// console.log(elements.innerText);
// console.log(bodies.innerText);
// console.dir(document.body.firstChild);
// let ele=document.querySelector("h2");
// console.dir(ele);
// ele.innerText=ele.innerText+" from archita";
// console.dir(ele);
// let ele=document.querySelectorAll(".box");
// let idx=1;
// for(let eles of ele){
//     eles.innerText=`new unique value ${idx}`
//     idx++;

// }
// let div=document.querySelector("div");
// console.log(div);
//  let id =div.getAttribute("id");
//  console.log(id);
//  let name1=div.getAttribute("name");
//  console.log(name1);
//  let par=document.querySelector("p");
//  console.log(par.setAttribute("class","uuuuuu"));
// //  let class1=par.getAttribute("class");
// //  console.log(class1.setAttribute());
// div.style.backgroundColor="purple"; 
// // div.style.visibility="hidden";
//insert elements
// let newbtn =document.createElement("button");
// newbtn.innerText="click me!";
// console.dir(newbtn);

// let div=document.querySelector("div");
// div.after("newbtn");
// let newheading=document.createElement("h1");
// newheading.innerHTML="<i> hi , i am new </i>";
// document.querySelector("body").prepend(newheading);
// newbtn.remove();
let newBtn= document.createElement("button");
newBtn.innerText="click me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
document.querySelector("body").prepend(newBtn);
//classlist
let para=document.querySelector("p");


















