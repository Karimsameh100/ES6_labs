//1 <--------------Self invoked function------------------------>

// (function (){
//     var a=10;
//     var b=15;
//     var sum=10+15;
//     alert("sumthion of two numbers = "+sum)
// })();

//2 <-----------------arrow function--------------------------->
var arr=[1,3,2,4,5,6,7,9,8]

const result=arr.filter((num)=>{
    return num %2 !== 0
})
document.getElementById("arrow").innerHTML=result
//foreach
var even = [];
arr.forEach((num) => {
    if (num % 2 == 0) {
        even.push(num)
    }

})
document.getElementById("arrow").innerHTML = even
//array.map

const mapp=arr.map((num)=>{
    return Math.pow(num,2)
})
document.getElementById("arrow").innerHTML = mapp
//3 <-----------------for in & for of & for each------------------------->
//for in

// var arr=[1,3,2,4,5,6,7,9,8]
// for (const num in arr) {
//     console.log(arr[num])
// }

//for of
// for (const num of arr) {
//     console.log(num)
    
// }

//for each
// var even = [];
// arr.forEach((num) => {
//     if (num % 2 == 0) {
//         even.push(num)
//     }

// })
// document.getElementById("arrow").innerHTML = even

//4 <---------------Spread opretor------------------------------------->
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);

document.getElementById("arrow").innerHTML = maxValue;

//5 <-----------------------class student------------------------>
class Student {
    constructor(name, universty,faculty,grade) {
      this.name = name;
      this.universty = universty;
      this.faculty=faculty;
      this.grade=grade
    }
  }

const std1=new Student("karim","Maniy","FCI","3.1 GPA")
console.log(std1.name)
console.log(std1.name +" is a student in faculty of "+std1.faculty+" in university "+std1.universty+" And his final grad is "+std1.grade)
  
//6 <----------------------Creat Set and use for of----------------------------------->

var student=new Set()
student.add("karim")
student.add("Ali")
student.add("omer")

console.log(student)

let studentName = "";
for (const name of student) {
  studentName += name + "<br>";
}

document.getElementById("arrow").innerHTML = studentName;

//7 <-------------------------------Generator------------------------------->
function* tipGenerator() {
    const tips = ['Tip 1','Tip 2','Tip 3','Tip 4','Tip 5','Tip 6','Tip 7','Tip 8','Tip 9','Tip 10'];

    for (let i = 0; i < tips.length; i++) {
        yield tips[i];
        
    }
}

const generator = tipGenerator();
  
// for (let i = 0;i<5;i++) {
//     alert(generator.next().value); 
// }

function genrat(){
    for (let tip of tipGenerator()) {
        console.log(tip);
      }
}

setInterval((()=>{
    alert(generator.next().value)
}),3000)

  