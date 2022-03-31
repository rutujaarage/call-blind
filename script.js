//call , apply and blind


let user ={
    name:"rahul",
    sayhi(){
        console.log(this.name);
    }
}
let admin={
    name:"ramesh"
}
user.sayhi.call(admin);//call is rebinding the value of "this" to another object. 

var person1={firstname:"rutu",nickname:"rutwi"};
var person2={firstname:"shri",nickname:"shirya"};
function name(hello1,hello2){
    console.log(hello1+" " + this.firstname + " "+ this.nickname +" "+hello2);
}
name.call(person2,"hi" , "by");
name.call(person1,["hi" , "by"]);


// when we have use apply method of object then where it use => this is use to when more argument are thier and the argument are store as an  in array 

//bind => it does not executed directly , it return me a function with a new value  of this


//.........................................map and set..........................

//..........map=> it collection of keyed data items just like an object
//the main diff of map and object is that a map allows keys  of any type (object of keys is only string )

//map methods are chainable


let mymap= new Map()

mymap.set(1,'num1');
mymap.set('1','str1');
mymap.set(true,'bool1');
console.log(mymap);

console.log(mymap.get(1));
console.log(mymap.get('1'));
console.log(mymap.size);
mymap.delete('1');
mymap.clear();
console.log(mymap);



let onemap=new Map([
    ['banana',40],
    ['kiwi',45],
    ['apple',5]
])
for(let item of onemap){
    console.log(item);
}

for(let item of onemap.values()){
    console.log(item);
}

onemap.forEach((value,key)=>{
    console.log(value,key);
})