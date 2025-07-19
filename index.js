// const express = require('express');
// const ejs = require('ejs');
// const path = require('path');
// const app = express();
// app.use(express.urlencoded({extended:true}));
// app.set('view engine','ejs');
// app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res) => {
//     res.render('index',{title:'Home Page'});
// });

// const userData = {
//     name:'Arun',
//     age:30,
//     city:'Kochi'
// }

// app.get('/profile',(req,res) => {
//     res.render('profile',{title:'Profile Page',userData});
// });

// app.get('/login',(req,res) => {
//     res.render('login');
// });

// app.post('/login',(req,res) => {
//     console.log(req.body);

//     const {name,age,city} = req.body;

//     if(!name||!age||!city){
//         return res.status(400).send('Missing required fields...!');
//     }

//     console.log(`Name:${name}, Age:${age}, City:${city}`);
//     res.send(`Form submitted! Recieved data: Name:${name}, Age:${age}, City:${city}`);
// });

// app.listen(3000,() => {
//     console.log('Server listening to http://localhost:3000');
// });


const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
    res.render('index',{title:'Home page'});
});

const userData = {
    name:'Aaron',
    age:30,
    city:'Kochi'

}

app.get('/profile',(req,res) => {
    res.render('profile',{title:'Profile page',userData});
});

app.get('/login',(req,res) => {
    res.render('login');
});

app.post('/login',(req,res) => {
    console.log(req.body);
    const {name,age,city} = req.body;

    if(!name||!age||!city){
        return res.status(400).send('Missing required fields....');
    }

    console.log(`Name:${name},Age:${age},City:${city}`);

    res.send(`Foem submitted...! Recieved data: Name:${name},Age:${age},City:${city}`);
});

app.listen(3000,() => {
    console.log('Server is listening to http://localhost:3000')
})