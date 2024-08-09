// qwestion 1.
let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var assumption=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            assumption=false;
            break;
        }
    }
}
else {
    assumption=false;
}
console.log(assumption);
//qwestion 2.
var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");

xhr.onload=function(){}
    var response =JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++)
        console.log(result[i].flags);
    xhr.send();

        //question 3
//use rest countries api url and print all countries names,regions,subregion and populations

var xhr = new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v2/all");

xhr.onload=function(){}
    var response=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++)
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population); 
        xhr.send();
