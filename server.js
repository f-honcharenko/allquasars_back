const express = require('express');
const bodyPaster = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const user = require('./models/user');
const db = require('./models/user');

mongoose.connect(config.mongoose.link,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();
app.use(cors());
app.use(bodyPaster.json());
app.use(bodyPaster.urlencoded({ extended: false}));

//routes
app.post('/signup', (req, res, next)=>{
    console.log(req.body);
    const newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.date,
        email: req.body.email,
        type: req.body.type,
        password: bcrypt.hashSync(req.body.password, config.bcrypt.salt)
    });

    user.findOne(
        {email:newUser.email},
        {_id:1},
        (err, user) =>{
        if (user){
            //User with this email was found
            return res.status(409).json({
                title:'Error',
                message:'email already used',
            }) 
        }else{
            newUser.save(err=>{
                if (err){
                    return res.status(400).json({
                        title:'error',
                        message:err
                    });
                }else{
                    return res.status(200).json({
                        title: 'singup success',
                        message: ''
                    });
                }
            });
        }
    });


});

app.post('/login', (req, res, next)=>{
    console.log(req.body);
    //Проверка полей, не пусты ли онм
    if (!req.body.email || !req.body.password){
        return res.status(406).json({
            title:'cannot get',
            message:'some fields are empty'
        });
    }

    // console.log(req.body);

    // Поиск
    User.findOne(
        {email: req.body.email},
        {password:1, _id:1}, 
        (err, result)=>{
        if (err) return req.sataus(500).json({
            title:'Server error',
            message:'some error(find user)'+err,
        });
        if(!result){
            res.status(401).json({
                title:'user not found',
                message:'user not found'
            });
        }
        //user was founded
        if (result) {
        //incorecet password
            if(!bcrypt.compareSync(req.body.password, result.password)){
                return res.status(401).json({
                    title:'login  falied',
                    message:'invalid password'
                });
            }
            //if all is good
            let token = jwt.sign({userId: result._id}, config.jwt.secret);
            return res.status(200).json({
                title:'login succses',
                message:'aouthorized',
                token
            });
        }
    });

});

//grabing user info
app.get('/user', (req, res, next)=>{
    let token = req.headers.token;
    jwt.verify(token, config.jwt.secret, (err,decoded)=>{
        if (err) return res.status(401).json({
            title:'unauthorized',
            message:'invalid token',
            err
        });
        //token is valid
        user.findOne(
            {_id:decoded.userId},
            // {firstName:1, email:1},
            (err, user) =>{
            if (err) return console.log(err);
            return res.status(200).json({
                title:'authroizated',
                message:'all is good',
                user
            }) 
        });
    });
});

app.get('/userDescription', (req, res, next)=>{
    let token = req.headers.token;
    let inputs = req.body.inputs;
    let id = req.headers.id;
    console.log('/userDescription is used');
    // jwt.verify(token, config.jwt.secret, (err,decoded)=>{
    //     if (err) return res.status(401).json({
    //         title:'unauthorized',
    //         message:'invalid token',
    //         err
    //     });
        
    //     //token is valid
    //     user.findOne(
    //         {_id:id},
    //         inputs,
    //         (err, user) =>{
    //         if (err) return console.log(err);
    //         return res.status(200).json({
    //             title:'анайдено',
    //             message:'all is good',
    //             user//Настройка мини-профиля!!!
    //         }) 
    //     });
    // });


    user.findOne(
        {_id:id},
        inputs,
        (err, user) =>{
        if (err) return console.log(err);
        return res.status(200).json({
            title:'анайдено',
            message:'all is good',
            user//Настройка мини-профиля!!!
        }) 
    });
});

//grab use4rs
app.post('/getUsers', (req, res, next)=>{
    let token = req.body.token;
    let filters = req.body.filters;
    console.log(filters);
    console.log(req.body);
    jwt.verify(token, config.jwt.secret, (err,decoded)=>{
        if (err) return res.status(401).json({
            title:'unauthorized',
            message:'invalid token',
            err
        });
        //token is valid
        User.find(
            filters,
            {name:1,type:1},
            (err, result)=>{
                if (err){
                    res.status(500).json({
                        title:'ERROR!',
                        message:'smth wrong',
                        err
                    })
                    return console.log(err);
                } else{
                    if (result.length == 0) {
                        //по заданный критерия пользователь не найден
                        console.log('0');
                        console.log(result);
                    }
                    return res.status(200).json({
                        title:'OK',
                        message:'all is good',
                        result
                    }) 
                }
        }).sort({name: 1});//Сортировка по имени
        
    });
});



const port = process.env.PORT || config.express.port;
app.listen(port, (err) =>{
    if (err) return console.log(err);
    console.log('Servver running on port '+ port); 
 }); 