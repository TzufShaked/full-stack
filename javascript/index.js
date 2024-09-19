const users=[
    {id:1,name:'Shilo Play'},
    {id:2,name:'Nickger Shov'},
    {id:4,name:'Shilo Play'},
    {id:7,name:'Nickger Shov'},
    {id:9,name:'Shilo Play'},
    {id:11,name:'Nickger Shov'}
]


ChangeUserName(1,'Samuel Obemba')
console.log(users)

function add(string){
    users.push({id:users.length+1,string})
}

function RemoveLastUser(){
    users.pop()
}

function findUserById(id){
    return users.find(user=> user.id===id)?.name
}

function RemoveFirstUser(){
    users.shift()
}

function ChangeUserName(id, name){
const user=users.find(user=>user.id===id);
if(!user){
    throw new Error('User not found');
}
    user.name=name;
}

function UserZugi(){
    return users.filter(user=>user.id%2===0);

}

function updateFieldName(){
   return users.map((item)=>({
    userId:item.id,
    userName:item.name,
    age:Math.floor(Math.random()*36+15)
   }));
}    

function EvenNumberInId(){
    return users.some((user)=>user.id%2===0)
}

function NameInUsers(name){
    return users.some((user)=>user.name.includes(name));
}

const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1,...arr2];

console.log(arr3)

const user={
    id:12345,
    username: "Hamudi",
    age: 25,
    hobbies:['reading','swimming'],
    info:{
        email:'Hamudi@mail.com',
        address:'Tel Abas',
    }
};


function AVGage(users){
const sum=updatedUsers.reduce((acc,curr)=>acc+curr.age,0)
return (sum/updatedUsers.length).toFixed(2);
}

const numbers=[1,2,3]
sum(...numbers)

function sum(a,b,c){
    let sum=a+b+c
    console.log(sumN);
}

//JSON.parse

//const user3=JSON.parse(JSON.stringify(user));

const user4=structuredClone(user)

const {id,...rest}=user
console.log(rest)

const updatedUsers=updateFieldName();
console.log(updatedUsers)


console.log("the avg age is:", AVGage())


console.log("first");

setTimeout(()=>{
console.log('second');
},1000)


(async function getUsers(){
    const response= await fetch('')
    const data= await response.json();

    return data;
})();

