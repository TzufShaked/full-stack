const users=[
    {
        id:1,
        name:'Koby Maman',
        age:69
    },
    {
        id:2,
        name:'Simha Leibovic',
        age:64
    },
];

const getUsers=(id)=>{
    return users[id];
};

module.exports={
    users,
    getUsers,
};