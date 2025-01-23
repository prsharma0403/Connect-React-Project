/*function transformArray(arr){
    let groupsize=1;
    return arr.reduceRight((acc,curr)=>{
        if(!acc[acc.length-1]||acc[acc.length-1].length===groupsize){
            acc.push([]);
            groupsize++;
        }
        acc[acc.length-1].push(curr);
        return acc;
    },[]);

}*/

function transformArray(arr){
    const output=[];
    let groupSize=1;
    for (let i=arr.length-1;i>=0;){
        const group=[];
        for( let j=0;j<groupSize && i>=0;j++){
            group.push(arr[i]);
            i--;}
            output.push(group);
            groupSize++
        }
        return output;
    }

const arr1=[1,2,3,4,5,6]

const arr=["Pune","Ahemdabad","Rajkot","Delhi","Munmbai","Kanpur"]
const result=transformArray(arr);
console.log(result);


const arr2=[1,2,3,4,5,6,7,8,9]

const evenNumber=arr2.filter((num)=>num%2===0);
const oddNumber=arr2.filter((num)=>num%2!==0)
console.log("EvenNumber",evenNumber);
console.log("OddNumber",oddNumber);

// Destructure

let a,b, rest;
[a,b]=[10,20];
console.log(a);
console.log(b);
[a,b,...rest]=[10,20,30,40]
console.log(rest);


let array1=[10,20,30,40,50]
let array2=[60,70,40,90]
let arr3=[...array1,...array2]
console.log(arr3)
/*Spread operator expands values in arrays and strings into individual
elements
Rest operator  puts the values of user-specified data into a JavaScript
*/
//Optional Chaining
const adventure={
    name:'Prashant',
    employe:{
        empId:"439110",
        designation:"seniorDigitalEngg"
    },
}
const myName=adventure.dog?.name;
console.log(myName);

console.log(adventure.someNonExistance?.())