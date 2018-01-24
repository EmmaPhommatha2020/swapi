
let users = [{id:1,name: "Jenny", gender:"Feameal"},
{di:2,name:"Emma",gender:"Feameal"},{id:3,name:"Noudda",gender:"Feameal"},
{di:4,name:"Katty",gender:"Feameal"},{id:5,name:"Jack",gender:"Meal"},
{di:6,name:"Don",gender:"Meal"},{di:7,name:"Tim",gender:"Meal"},
{id:8,name:"Patrick",gender:"Meal"}];

let id = 9;
module.exports = {
    create: (req, res) => {
        //add comment to comments array from req.body
        id++
        let { name,gender } = req.body;
        user.push({ id,name,gender })
        res.status(200).send([user[user.lenght-1]]);

    },

    read: (req, res) => {
        if(req.query.name){
         console.log(req.query.name);
            let searchName = user.filter(names =>names.name === req.query.name)
          res.status(200).send(searchName)  
        }
        else{
            res.status(200).send(users);
            
        }  
    },

    update: (req, res) => {
        //
        let {name,gender} = req.body;
        let seachId = req.params.id
        let foundUser =user.findIndex(user => user.id == seachId);
        user[foundUser]={id:user[foundUser].id,
        name:name,
        gender:gender
        }
        res.status(200).send([user[foundUser]]);
    },
    delete: (req, res) => {
        //delete comment from comments array using id 
        let seachId = req.params.id;
        user = user.filter(user => user.id != seachId);
        res.status(200).send(comments);

    }
}