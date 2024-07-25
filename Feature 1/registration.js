
const express = require('express');

app.use(bodyParser.json());
let users = []  // would ideally be a connection to a database of users hosten on an NoSQL/SQL platform such as MongoDB
app.post('/registration', async, (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {username: req.body.username, email: req.body.email, password:hashedPassword};
    users.push(user);
    res.status(200).send('User registered successfully');
});

app.post('/login', async, (req,res)=>{
    const user = users.find(user=> user.email=== req.body.email);
    if(user==null){
        return res.status(400).send("Invalid Credentials");
    }
    if(!(await bcrypt.compare(req.body.password,user.password))){
        return return res.status(400).send("Invalid Credentials");
    }
    res.status(200).send('Login Successful')

}

);